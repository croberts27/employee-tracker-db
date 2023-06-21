-- Populate data into department table
INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Marketing");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("HR");

-- Populate data into roles table
INSERT INTO role (title, salary, department_id)
VALUE ('Manager', 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ('Sales Representative', 90000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ('Marketing Coordinator', 30000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ('Financial Analyst', 45000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ('HR Specialist', 80000, 5);

-- Populate data into employees table
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('John', 'Doe', null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Jane', 'Doe', null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Michael', 'Douglas', 1, 3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Martin', 'Sheen', 2, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Jack', 'Kirby', null, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Stan', 'Lee', 3, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Balthazar', 'Jones', 4, 7);