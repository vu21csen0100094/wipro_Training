// scripts/insertCourse.js
const pool = require('../db/mysql');

async function insertCourse(course) {
  const sql = `INSERT INTO courses (title, description, level, instructor) VALUES (?, ?, ?, ?)`;
  const params = [course.title, course.description, course.level, course.instructor];

  try {
    const [result] = await pool.execute(sql, params);
    console.log('INSERT INTO courses successful. InsertId =', result.insertId);
    return result.insertId;
  } catch (err) {
    console.error('Error inserting course:', err.message);
    throw err;
  } finally {
    // Do not close pool here in production; app keeps using it.
    // pool.end(); // only for scripts that are one-time runs
  }
}

// Example run when script invoked directly
if (require.main === module) {
  const sample = {
    title: 'Full Stack Web Development',
    description: 'Learn Node.js, React, DBs.',
    level: 'beginner',
    instructor: 'P. Rashmita'
  };
  insertCourse(sample)
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

module.exports = insertCourse;
