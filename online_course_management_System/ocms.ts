/* ocms-mini.ts
   Mini Online Course Management System demonstrating:
   - Maps, Arrays, Tuples
   - Interfaces
   - Enums
   - Iterator (Iterable)
   - Decorators for logging
   - Type annotations, `any`, and `declare`
*/

// --- Ambient declaration example (demonstrates 'declare') ---
declare global {
  var __OCMS_VERSION__: string | undefined;
}
// assign to global in a safe way
(global as any).__OCMS_VERSION__ = (global as any).__OCMS_VERSION__ ?? "1.0.0";

// --- Enums ---
enum CourseCategory {
  Programming = "Programming",
  Design = "Design",
  Marketing = "Marketing",
  Business = "Business",
  DataScience = "DataScience",
}

// --- Interfaces ---
interface Person {
  id: number;
  name: string;
  email?: string;
}

interface Instructor extends Person {
  bio?: string;
  specialties: CourseCategory[];
}

interface Student extends Person {
  enrolledCourseIds: number[];
  progress: Map<number, number>; // courseId -> percent
}

interface Course {
  id: number;
  title: string;
  category: CourseCategory;
  instructorId: number;
  maxStudents: number;
  tags?: string[];
}

// Tuple example: [courseId, courseTitle, category]
type CourseTuple = [number, string, CourseCategory];

// --- Decorator for logging actions on methods ---
function LogAction(actionName?: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const name = actionName ?? propertyKey;
      console.log(`[LOG] (${new Date().toISOString()}) Action: ${name}`);
      console.log(`[LOG]   Args:`, ...args);
      const result = original.apply(this, args);
      console.log(`[LOG]   Result:`, result);
      return result;
    };
    return descriptor;
  };
}

// --- Course collection with Iterable implementation (Iterator demo) ---
class CourseCollection implements Iterable<Course> {
  private courses: Map<number, Course> = new Map();

  add(course: Course) {
    this.courses.set(course.id, course);
  }
  get(id: number) {
    return this.courses.get(id);
  }
  remove(id: number) {
    return this.courses.delete(id);
  }
  values(): Course[] {
    return Array.from(this.courses.values());
  }

  // Implement the iterable protocol so we can do `for...of`
  [Symbol.iterator](): Iterator<Course> {
    const iterator = this.courses.values();
    return {
      next(): IteratorResult<Course> {
        const res = iterator.next();
        if (res.done) {
          return { done: true, value: undefined as any };
        } else {
          return { done: false, value: res.value };
        }
      },
    };
  }
}

// --- Manager class using Maps (main logic) ---
class OCMS {
  // Use Maps to store entities
  private instructors: Map<number, Instructor> = new Map();
  private students: Map<number, Student> = new Map();
  private courses: CourseCollection = new CourseCollection();

  // Use an array of tuples for a quick export example
  public exportCourseTuples(): CourseTuple[] {
    return this.courses.values().map((c) => [c.id, c.title, c.category]);
  }

  // Decorated methods will log their calls
  @LogAction("Create Instructor")
  createInstructor(instr: Instructor) {
    if (this.instructors.has(instr.id)) {
      throw new Error(`Instructor with id ${instr.id} already exists`);
    }
    this.instructors.set(instr.id, instr);
    return instr;
  }

  @LogAction("Create Course")
  createCourse(course: Course) {
    if (this.courses.get(course.id)) {
      throw new Error(`Course with id ${course.id} already exists`);
    }
    if (!this.instructors.has(course.instructorId)) {
      throw new Error(`Instructor ${course.instructorId} does not exist`);
    }
    this.courses.add(course);
    return course;
  }

  @LogAction("Create Student")
  createStudent(student: Student) {
    if (this.students.has(student.id)) {
      throw new Error(`Student with id ${student.id} already exists`);
    }
    this.students.set(student.id, {
      ...student,
      progress: new Map(student.progress ?? []),
    });
    return student;
  }

  @LogAction("Enroll Student")
  enroll(studentId: number, courseId: number) {
    const student = this.students.get(studentId);
    const course = this.courses.get(courseId);
    if (!student) throw new Error(`Student ${studentId} not found`);
    if (!course) throw new Error(`Course ${courseId} not found`);

    if (student.enrolledCourseIds.includes(courseId)) {
      return `Student ${studentId} already enrolled in ${courseId}`;
    }

    // Simple capacity check (count students enrolled in that course)
    const enrolledCount = Array.from(this.students.values()).filter((s) =>
      s.enrolledCourseIds.includes(courseId)
    ).length;

    if (enrolledCount >= course.maxStudents) {
      throw new Error(`Course ${course.title} is full`);
    }

    student.enrolledCourseIds.push(courseId);
    student.progress.set(courseId, 0);
    return `Enrolled student ${studentId} to course ${courseId}`;
  }

  @LogAction("Record Progress")
  recordProgress(studentId: number, courseId: number, percent: number) {
    const student = this.students.get(studentId);
    if (!student) throw new Error(`Student ${studentId} not found`);
    if (!student.enrolledCourseIds.includes(courseId))
      throw new Error(`Student ${studentId} not enrolled in course ${courseId}`);
    student.progress.set(courseId, Math.max(0, Math.min(100, percent)));
    return student.progress.get(courseId);
  }

  // Example of using `any` when reading external/untyped JSON data
  @LogAction("Import From JSON (untyped)")
  importFromJson(untyped: any) {
    // `any` allows parsing unknown shapes; we then coerce values
    try {
      if (!Array.isArray(untyped.courses)) throw new Error("bad payload");
      for (const rawCourse of untyped.courses) {
        const course: Course = {
          id: Number(rawCourse.id),
          title: String(rawCourse.title),
          category: (rawCourse.category as CourseCategory) || CourseCategory.Programming,
          instructorId: Number(rawCourse.instructorId),
          maxStudents: Number(rawCourse.maxStudents) || 30,
          tags: rawCourse.tags ? (rawCourse.tags as string[]) : [],
        };
        // ignore errors per-item to be resilient
        try {
          this.createCourse(course);
        } catch (e) {
          console.warn("[WARN] importFromJson:", (e as Error).message);
        }
      }
      return true;
    } catch (e) {
      console.error("[ERROR] importFromJson", e);
      return false;
    }
  }

  // Quick report using iterator to loop courses
  listCourses() {
    const out: string[] = [];
    for (const c of this.courses) {
      const instr = this.instructors.get(c.instructorId);
      out.push(
        `#${c.id} "${c.title}" [${c.category}] by ${instr?.name ?? "Unknown"} (max ${c.maxStudents})`
      );
    }
    return out;
  }
}

// --- Demo run (console) ---
function demo() {
  console.log("OCMS Mini App — demo run. Version:", (global as any).__OCMS_VERSION__);
  const app = new OCMS();

  // Create instructors
  app.createInstructor({
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    specialties: [CourseCategory.Programming, CourseCategory.DataScience],
    bio: "15 years experience in software engineering",
  });

  app.createInstructor({
    id: 2,
    name: "Ravi Kumar",
    email: "ravi@example.com",
    specialties: [CourseCategory.Design],
  });

  // Create courses
  app.createCourse({
    id: 101,
    title: "Intro to TypeScript",
    category: CourseCategory.Programming,
    instructorId: 1,
    maxStudents: 2,
    tags: ["ts", "javascript"],
  });

  app.createCourse({
    id: 102,
    title: "Design Basics",
    category: CourseCategory.Design,
    instructorId: 2,
    maxStudents: 25,
  });

  // Create students
  app.createStudent({
    id: 201,
    name: "Sana",
    email: "sana@student.com",
    enrolledCourseIds: [],
    progress: new Map(),
  });

  app.createStudent({
    id: 202,
    name: "Ishaan",
    enrolledCourseIds: [],
    progress: new Map(),
  });

  // Enroll and record
  app.enroll(201, 101);
  app.enroll(202, 101);

  // This enrollment should fail because maxStudents=2 (already 2)
  try {
    app.createStudent({
      id: 203,
      name: "Extra",
      enrolledCourseIds: [],
      progress: new Map(),
    });
    app.enroll(203, 101);
  } catch (e) {
    console.log("[EXPECTED] could not enroll 203 to 101:", (e as Error).message);
  }

  app.recordProgress(201, 101, 40);
  app.recordProgress(202, 101, 80);

  // Export courses as tuples
  const tuples: CourseTuple[] = app.exportCourseTuples();
  console.log("Course tuples:", tuples);

  // List courses (iterates using our iterator)
  console.log("Courses list:");
  for (const line of app.listCourses()) {
    console.log("  ", line);
  }

  // Import from untyped JSON (uses `any`)
  const someJsonPayload: any = {
    courses: [
      { id: 103, title: "Marketing 101", category: "Marketing", instructorId: 1, maxStudents: 20 },
      { id: 101, title: "Duplicate Course", category: "Programming", instructorId: 1, maxStudents: 10 },
    ],
  };
  app.importFromJson(someJsonPayload);

  console.log("Final course tuples after import:", app.exportCourseTuples());
}

// Run demo when this file is invoked directly
if (require.main === module) {
  demo();
}

export {
  OCMS,
  CourseCollection,
  CourseCategory,
  Instructor,
  Student,
  Course,
  CourseTuple,
};
