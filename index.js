//imports
const mysql = require('mysql2/promise');

const Logging = require('./utils/logging');
const Employee = require('./lib/employee');
const Role = require('./lib/role');
const Department = require('./lib/department');

const l = new Logging();



async function main() {
    const db = await mysql.createConnection(
        {
            host:'localhost',
            user: 'root',
            password: 'password1234',
            database: 'employees_db'
    });
    
    l.debug(`INFO: Connected to MySQL database`); 
    const e = new Employee(db);
    const r = new Role(db);
    const d = new Department(db);



    db.end();


};

function applyState(state){
    l.debug(`Applying State: ${state}`);

    switch (state){

        case "mainMenu":
            l.debug("STATE: Main Menu");
            break;

        case "viewEmployees":
            l.debug("STATE: view employees");
            break;
    
        case "addEmployee":
            l.debug("STATE: add employee");
            break;
    
        case "updateEmployee":
            l.debug("STATE: update employee");
            break;

        case "viewRoles":
            l.debug("STATE: view roles");
            break;
        
        case 'addRole':
            l.debug('STATE: add role');
            break;
    
        case 'updateRole':
            l.debug('STATE: update role');
            break;
        
        case 'viewDepartments':
            l.debug('STATE: view departments');
            break;
        
        case 'addDepartment':
            l.debug('STATE: add department');
            break;

        case 'updateDepartment':
            l.debug('STATE: update department');
            break;

        
        case "viewAllTables":
            l.debug('STATE: view all tables');
            break;

        case "quit":
            l.debug("STATE: quitter! See you later!");
            break;
    
    };
}


main();