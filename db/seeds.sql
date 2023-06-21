-- Populate data into department table
INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("HR");

-- Populate data into roles table
INSERT INTO roles (title, salary, department_id) VALUES ('Manager', 100000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Sales Representative', 90000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Marketing Coordinator', 30000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Sales Lead", 100000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Financial Analyst', 45000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('HR Specialist', 80000, 4);

-- Populate data into employees table
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ('John', 'Doe', null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ('Jane', 'Doe', null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ('Michael', 'Douglas', 1, 3);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ('Martin', 'Sheen', 2, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ('Jack', 'Kirby', null, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ('Stan', 'Lee', 3, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ('Balthazar', 'Jones', 4, 7);
