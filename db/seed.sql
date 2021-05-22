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


-- The Employees table
INSERT INTO employee (first_name, last_name, role_id) values ('Jesse', 'Ceniseros', 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Erick', 'Flores', 2, 1);
INSERT INTO employee (first_name, last_name, role_id) values ('Yanira', 'Sanchez', 3);
INSERT INTO employee (first_name, last_name, role_id) values ('Jermaine', 'Cole', 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Hogh', 'Jazz', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Amanda', 'Huginkis', 3, 1);
INSERT INTO employee (first_name, last_name, role_id) values ('Pedro', 'Zavala', 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Matthew', 'Ortiz', 1, 1);
