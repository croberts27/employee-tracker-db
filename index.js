//DEPENDENCIES
const inquirer = require("inquirer")
const mysql = require("mysql2")
const ctable = require('console.table');

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306, //not 3001
    user: 'root', //root
    password: 'Bigmansql123!', // my password
    database: 'employee_db' // db name
  });

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the Employee Database!');
    displayMenu()
});

function displayMenu () {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "choice",
            choices: [
                "View All Employees", 
                "View All Roles",
                "View All Departments", 
                "Update Employee",
                "Add Employee",
                "Add Role",
                "Add Department",
            ]
        }
    ]) .then(function(opt){
        switch (opt.choice){
            case "View All Employees":
                viewAllEmployees();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Departments":
                viewAllDepartments();
                break;
            case "Update Employee":
                updateEmployee();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Department":
                addDepartment();
                break;
        }
    })
}

function viewAllEmployees() {
    db.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id LEFT JOIN employee e on employee.manager_id = e.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      displayMenu()
  })
}


function viewAllRoles(){
    db.query("SELECT DISTINCT role.title AS Roles FROM employee JOIN role ON employee.role_id = role.id;", 
    function(err, res) {
    if (err) throw err
    console.table(res)
    displayMenu()
    })
}

function viewAllDepartments(){
    db.query("SELECT name AS Departments FROM department;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      displayMenu()
    })
}
//need function to show roles as option for add employee prompt

var rolesOpt = []
function selectedRole(){
    db.query("SELECT * FROM role", function(err, res){
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            rolesOpt.push(res[i].title);
        }
    })
    return rolesOpt;
}

var managersList = [];
function selectManager() {
  db.query("SELECT first_name, last_name FROM employee WHERE manager_id IS NULL", function(err, res) {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      managersList.push(res[i].first_name);
    }

  })
  return managersList;
}

function updateEmployee(){
    db.query('SELECT * FROM employee', (err, employees) => {
        if (err) console.log(err);
        employees = employees.map((employee) => {
            return {
                name: `${employee.first_name} ${employee.last_name}`,
                value: employee.id,
            };
        });
        db.query('SELECT * FROM role', (err, roles) => {
            if (err) console.log(err);
            roles = roles.map((role) => {
                return {
                    name: role.title,
                    value: role.id,
                }
            });
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'selectEmployee',
                        message: 'Select employee to update...',
                        choices: employees,
                    },
                    {
                        type: 'list',
                        name: 'selectNewRole',
                        message: 'Select new employee role...',
                        choices: roles,
                    },
                ])
                .then((data) => {
                    db.query('UPDATE employee SET ? WHERE ?',
                        [
                            {
                                role_id: data.selectNewRole,
                            },
                            {
                                id: data.selectEmployee,
                            },
                        ],
                        function (err) {
                            if (err) throw err;
                        }
                    );
                    console.log('Employee role updated');
                    displayMenu();
               });
        });
    });
}

function addEmployee() {
    inquirer.prompt([
      {
        name: "first_name",
        type: "input",
        message: "Enter first name: "
      },
      {
        name: "last_name",
        type: "input",
        message: "Enter last name: "
      },
      {
        name: "role",
        type: "list",
        message: "Enter role: ",
        choices: selectedRole()
      },
      {
        name: "manager",
        type: "rawlist",
        message: "Enter manager name:",
        choices: selectManager()
      }
    ]).then(function (val) {
      var roleId = selectedRole().indexOf(val.role) + 1;
      var managerId = selectManager().indexOf(val.manager) + 1;
      db.query(
        "INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES (?, ?, ?, ?)",
        [val.first_name, val.last_name, managerId, roleId],
        function (err) {
          if (err) throw err;
          console.table(val);
          displayMenu();
        }
      );
    });
  }  

function addRole (){
    db.query("SELECT role.title AS Title, role.salary AS Salary FROM role",   function(err, res) {
        inquirer.prompt([
            {
              name: "title",
              type: "input",
              message: "Enter Role:"
            },
            {
              name: "salary",
              type: "input",
              message: "Enter Salary:"
    
            } 
        ]).then(function(res) {
            db.query(
                "INSERT INTO role SET ?",
                {
                  title: res.title,
                  salary: res.salary,
                },
                function(err) {
                    if (err) throw err
                    console.table(res);
                    displayMenu();
                }
            )
        });
      });
}

function addDepartment(){
    inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "Enter department to add:"
        }
    ]).then(function(res) {
        var query = db.query(
            "INSERT INTO department SET ? ",
            {
              name: res.name
            
            },
            function(err) {
                if (err) throw err
                console.table(res);
                displayMenu();
            }
        )
    })
}