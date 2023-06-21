//DEPENDENCIES
const inquirer = require("inquirer")
const mysql = require("mysql2")
const consoleTable = require('console.table');

// Create a connection to the MySQL database
const dataBase = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'Bigmansql123!', // Bigmansql123!
    database: 'employee_db' // db name
  });

dataBase.connect((err) => {
    if (err) throw err;
    console.log('Connected to Employee_db!');
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

function viewAllEmployees(){

}

function viewAllRoles(){

}

function viewAllDepartments(){

}

function updateEmployee(){

}

function addEmployee(){

}

function addRole (){

}

function addDepartment(){
    
}