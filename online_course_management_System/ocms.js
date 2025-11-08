"use strict";
/* ocms-mini.ts
   Mini Online Course Management System demonstrating:
   - Maps, Arrays, Tuples
   - Interfaces
   - Enums
   - Iterator (Iterable)
   - Decorators for logging
   - Type annotations, `any`, and `declare`
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCategory = exports.CourseCollection = exports.OCMS = void 0;
// assign to global in a safe way
global.__OCMS_VERSION__ = (_a = global.__OCMS_VERSION__) !== null && _a !== void 0 ? _a : "1.0.0";
// --- Enums ---
var CourseCategory;
(function (CourseCategory) {
    CourseCategory["Programming"] = "Programming";
    CourseCategory["Design"] = "Design";
    CourseCategory["Marketing"] = "Marketing";
    CourseCategory["Business"] = "Business";
    CourseCategory["DataScience"] = "DataScience";
})(CourseCategory || (exports.CourseCategory = CourseCategory = {}));
// --- Decorator for logging actions on methods ---
function LogAction(actionName) {
    return function (target, propertyKey, descriptor) {
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var name = actionName !== null && actionName !== void 0 ? actionName : propertyKey;
            console.log("[LOG] (".concat(new Date().toISOString(), ") Action: ").concat(name));
            console.log.apply(console, __spreadArray(["[LOG]   Args:"], args, false));
            var result = original.apply(this, args);
            console.log("[LOG]   Result:", result);
            return result;
        };
        return descriptor;
    };
}
// --- Course collection with Iterable implementation (Iterator demo) ---
var CourseCollection = /** @class */ (function () {
    function CourseCollection() {
        this.courses = new Map();
    }
    CourseCollection.prototype.add = function (course) {
        this.courses.set(course.id, course);
    };
    CourseCollection.prototype.get = function (id) {
        return this.courses.get(id);
    };
    CourseCollection.prototype.remove = function (id) {
        return this.courses.delete(id);
    };
    CourseCollection.prototype.values = function () {
        return Array.from(this.courses.values());
    };
    // Implement the iterable protocol so we can do `for...of`
    CourseCollection.prototype[Symbol.iterator] = function () {
        var iterator = this.courses.values();
        return {
            next: function () {
                var res = iterator.next();
                if (res.done) {
                    return { done: true, value: undefined };
                }
                else {
                    return { done: false, value: res.value };
                }
            },
        };
    };
    return CourseCollection;
}());
exports.CourseCollection = CourseCollection;
// --- Manager class using Maps (main logic) ---
var OCMS = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _createInstructor_decorators;
    var _createCourse_decorators;
    var _createStudent_decorators;
    var _enroll_decorators;
    var _recordProgress_decorators;
    var _importFromJson_decorators;
    return _a = /** @class */ (function () {
            function OCMS() {
                // Use Maps to store entities
                this.instructors = (__runInitializers(this, _instanceExtraInitializers), new Map());
                this.students = new Map();
                this.courses = new CourseCollection();
            }
            // Use an array of tuples for a quick export example
            OCMS.prototype.exportCourseTuples = function () {
                return this.courses.values().map(function (c) { return [c.id, c.title, c.category]; });
            };
            // Decorated methods will log their calls
            OCMS.prototype.createInstructor = function (instr) {
                if (this.instructors.has(instr.id)) {
                    throw new Error("Instructor with id ".concat(instr.id, " already exists"));
                }
                this.instructors.set(instr.id, instr);
                return instr;
            };
            OCMS.prototype.createCourse = function (course) {
                if (this.courses.get(course.id)) {
                    throw new Error("Course with id ".concat(course.id, " already exists"));
                }
                if (!this.instructors.has(course.instructorId)) {
                    throw new Error("Instructor ".concat(course.instructorId, " does not exist"));
                }
                this.courses.add(course);
                return course;
            };
            OCMS.prototype.createStudent = function (student) {
                var _b;
                if (this.students.has(student.id)) {
                    throw new Error("Student with id ".concat(student.id, " already exists"));
                }
                this.students.set(student.id, __assign(__assign({}, student), { progress: new Map((_b = student.progress) !== null && _b !== void 0 ? _b : []) }));
                return student;
            };
            OCMS.prototype.enroll = function (studentId, courseId) {
                var student = this.students.get(studentId);
                var course = this.courses.get(courseId);
                if (!student)
                    throw new Error("Student ".concat(studentId, " not found"));
                if (!course)
                    throw new Error("Course ".concat(courseId, " not found"));
                if (student.enrolledCourseIds.includes(courseId)) {
                    return "Student ".concat(studentId, " already enrolled in ").concat(courseId);
                }
                // Simple capacity check (count students enrolled in that course)
                var enrolledCount = Array.from(this.students.values()).filter(function (s) {
                    return s.enrolledCourseIds.includes(courseId);
                }).length;
                if (enrolledCount >= course.maxStudents) {
                    throw new Error("Course ".concat(course.title, " is full"));
                }
                student.enrolledCourseIds.push(courseId);
                student.progress.set(courseId, 0);
                return "Enrolled student ".concat(studentId, " to course ").concat(courseId);
            };
            OCMS.prototype.recordProgress = function (studentId, courseId, percent) {
                var student = this.students.get(studentId);
                if (!student)
                    throw new Error("Student ".concat(studentId, " not found"));
                if (!student.enrolledCourseIds.includes(courseId))
                    throw new Error("Student ".concat(studentId, " not enrolled in course ").concat(courseId));
                student.progress.set(courseId, Math.max(0, Math.min(100, percent)));
                return student.progress.get(courseId);
            };
            // Example of using `any` when reading external/untyped JSON data
            OCMS.prototype.importFromJson = function (untyped) {
                // `any` allows parsing unknown shapes; we then coerce values
                try {
                    if (!Array.isArray(untyped.courses))
                        throw new Error("bad payload");
                    for (var _i = 0, _b = untyped.courses; _i < _b.length; _i++) {
                        var rawCourse = _b[_i];
                        var course = {
                            id: Number(rawCourse.id),
                            title: String(rawCourse.title),
                            category: rawCourse.category || CourseCategory.Programming,
                            instructorId: Number(rawCourse.instructorId),
                            maxStudents: Number(rawCourse.maxStudents) || 30,
                            tags: rawCourse.tags ? rawCourse.tags : [],
                        };
                        // ignore errors per-item to be resilient
                        try {
                            this.createCourse(course);
                        }
                        catch (e) {
                            console.warn("[WARN] importFromJson:", e.message);
                        }
                    }
                    return true;
                }
                catch (e) {
                    console.error("[ERROR] importFromJson", e);
                    return false;
                }
            };
            // Quick report using iterator to loop courses
            OCMS.prototype.listCourses = function () {
                var _b;
                var out = [];
                for (var _i = 0, _c = this.courses; _i < _c.length; _i++) {
                    var c = _c[_i];
                    var instr = this.instructors.get(c.instructorId);
                    out.push("#".concat(c.id, " \"").concat(c.title, "\" [").concat(c.category, "] by ").concat((_b = instr === null || instr === void 0 ? void 0 : instr.name) !== null && _b !== void 0 ? _b : "Unknown", " (max ").concat(c.maxStudents, ")"));
                }
                return out;
            };
            return OCMS;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _createInstructor_decorators = [LogAction("Create Instructor")];
            _createCourse_decorators = [LogAction("Create Course")];
            _createStudent_decorators = [LogAction("Create Student")];
            _enroll_decorators = [LogAction("Enroll Student")];
            _recordProgress_decorators = [LogAction("Record Progress")];
            _importFromJson_decorators = [LogAction("Import From JSON (untyped)")];
            __esDecorate(_a, null, _createInstructor_decorators, { kind: "method", name: "createInstructor", static: false, private: false, access: { has: function (obj) { return "createInstructor" in obj; }, get: function (obj) { return obj.createInstructor; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _createCourse_decorators, { kind: "method", name: "createCourse", static: false, private: false, access: { has: function (obj) { return "createCourse" in obj; }, get: function (obj) { return obj.createCourse; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _createStudent_decorators, { kind: "method", name: "createStudent", static: false, private: false, access: { has: function (obj) { return "createStudent" in obj; }, get: function (obj) { return obj.createStudent; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _enroll_decorators, { kind: "method", name: "enroll", static: false, private: false, access: { has: function (obj) { return "enroll" in obj; }, get: function (obj) { return obj.enroll; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _recordProgress_decorators, { kind: "method", name: "recordProgress", static: false, private: false, access: { has: function (obj) { return "recordProgress" in obj; }, get: function (obj) { return obj.recordProgress; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _importFromJson_decorators, { kind: "method", name: "importFromJson", static: false, private: false, access: { has: function (obj) { return "importFromJson" in obj; }, get: function (obj) { return obj.importFromJson; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.OCMS = OCMS;
// --- Demo run (console) ---
function demo() {
    console.log("OCMS Mini App — demo run. Version:", global.__OCMS_VERSION__);
    var app = new OCMS();
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
    }
    catch (e) {
        console.log("[EXPECTED] could not enroll 203 to 101:", e.message);
    }
    app.recordProgress(201, 101, 40);
    app.recordProgress(202, 101, 80);
    // Export courses as tuples
    var tuples = app.exportCourseTuples();
    console.log("Course tuples:", tuples);
    // List courses (iterates using our iterator)
    console.log("Courses list:");
    for (var _i = 0, _a = app.listCourses(); _i < _a.length; _i++) {
        var line = _a[_i];
        console.log("  ", line);
    }
    // Import from untyped JSON (uses `any`)
    var someJsonPayload = {
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
