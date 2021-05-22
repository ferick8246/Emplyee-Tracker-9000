DROP DATABASE if EXISTS employee_DB;
  CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE `department` (
  id INT NOT NULL AUTO_INCREMENT,
  dept VARCHAR(30) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE `role` (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  dept_id INT REFERENCES department.id,
  PRIMARY KEY (id)
);

CREATE TABLE `employee` (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT REFERENCES role.id,
  manager_id INT,
  PRIMARY KEY (id)
);