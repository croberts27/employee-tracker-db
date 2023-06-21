USE employee_db;

-- Populate departments table
INSERT INTO departments (name) VALUES
    ('Sales'),
    ('Marketing'),
    ('Finance'),
    ('HR');

-- Populate roles table
INSERT INTO roless (title, salary, department_id) VALUES
    ('Manager', 100000, 1),
    ('Sales Representative', 90000, 2),
    ('Marketing Coordinator', 30000, 3),
    ('Financial Analyst', 45000, 4),
    ('HR Specialist', 80000, 5);

-- Populate employees table
INSERT INTO employees (first_name, last_name, manager_id, role_id) VALUES
    ('John', 'Doe', null, 1),
    ('Jane', 'Doe', null, 2),
    ('Michael', 'Douglas', 1, 3),
    ('Martin', 'Sheen', 2, 4),
    ('Jack', 'Kirby', null, 5),
    ('Stan', 'Lee', 3, 6),
    ('Balthazar', 'Jones', 4, 7);
