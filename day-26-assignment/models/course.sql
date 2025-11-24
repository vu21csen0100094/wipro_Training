CREATE DATABASE IF NOT EXISTS skillsphere;
USE skillsphere;

CREATE TABLE IF NOT EXISTS courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  level ENUM('beginner','intermediate','advanced') DEFAULT 'beginner',
  instructor VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- (Optional) index by instructor for quick lookup
CREATE INDEX idx_instructor ON courses(instructor);
