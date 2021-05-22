-- Table for the departments 
INSERT INTO department (dept) VALUES ('leagal');
INSERT INTO department (dept) VALUES ('engineering');
INSERT INTO department (dept) VALUES ('finance');
INSERT INTO department (dept) VALUES ('sales');

-- Table for Roles 
INSERT INTO role (title, salary, dept_id) VALUES ('Accountant', 60000, 1);
INSERT INTO role (title, salary, dept_id)  VALUES ('Intern', 50000, 4);
INSERT INTO role (title, salary, dept_id)  VALUES ('Engineer', 90000, 2);
INSERT INTO role (title, salary, dept_id)  VALUES ('IT', 80000, 3);