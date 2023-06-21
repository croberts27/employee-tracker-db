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
    ]) .then(function(val){
        switch (val.choice){
            case 'View All Employees':
                viewAllEmployees();
                break;
        }
    })
}