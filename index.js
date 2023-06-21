//DEPENDENCIES
const inquirer = require("inquirer")
const mysql = require("mysql2")
const cTable = require('console.table');

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
            
        }
    ])
}