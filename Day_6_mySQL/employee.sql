-- Creating a Database
CREATE DATABASE IF NOT EXISTS EmployeeDB;  -- Creating the DB if it doesn't exist already
USE EmployeeDB;                            -- Using the created DB

-- Creating a Table
CREATE TABLE IF NOT EXISTS Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT,   -- Primary Key with Auto Increment 
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    HireDate DATE NOT NULL,                      -- Date type for storing dates
    Salary DECIMAL(10, 2) NOT NULL               -- Decimal type with precision and scale
);

-- Inserting Data into the Table
INSERT INTO Employees (FirstName, LastName, Email, HireDate, Salary) VALUES
('John', 'Doe', 'john.doe@example.com', '2023-01-15', 60000.00),
('Jane', 'Smith', 'jane.smith@example.com', '2023-02-20', 65000.00),
('Alice', 'Johnson', 'alice.johnson@example.com', '2023-03-10', 70000.00);

-- Querying the Data from the Table
SELECT * FROM Employees;                               -- Select all columns and rows

SELECT FirstName, LastName, Email FROM Employees;       -- Select specific columns

-- New Query: Employees earning more than 65,000
SELECT FirstName, LastName, Salary 
FROM Employees
WHERE Salary < 65000;
