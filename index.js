//imports
const mysql = require('mysql2/promise');
const inquirer = require('inquirer');
const {questions,choices} = require('./lib/questions');
const Logging = require('./utils/logging');
const Employee = require('./lib/employee');
const Role = require('./lib/role');
const Department = require('./lib/department');
const queries = require('./lib/questions');
const table = require('console.table');


const l = new Logging();


async function main() {
    db = await mysql.createConnection(
        {
            host:'localhost',
            user: 'root',
            password: 'thisiscool',
            database: 'employees_db'
    });
    
    l.debug(`INFO: Connected to MySQL database`); 
    e = new Employee(db);
    r = new Role(db);
    d = new Department(db);

    applyState('mainMenu')

};

async function applyState(state){
    l.debug(`INFO: Applying State: ${state}`);

    switch (state){

        case "mainMenu":
            l.debug("STATE: Main Menu");
            var ans = await promptQuestions(questions.mainMenuQuestions);
            applyState(ans.menu);
            break;

        case "View Employees":
            l.debug("STATE: view employees");
            var ans = await promptQuestions(questions.viewEmployeesQuestions);
            var data = await e.viewEmployees(ans.view);
            if(data.length === 0){
                l.log(`Employee table is empty`);
            } else {
                console.table(data);
            }
            applyState('mainMenu');
            break;
    
        case "Add Employee":
            l.debug("STATE: add employee");
            var ans = await promptQuestions(questions.addEmployeeQuestions);
            await e.addEmployee(ans.firstName,ans.lastName,ans.roleID,ans.managerID)
            l.log(`Employee added! View updated table to confirm your selection`);
            applyState('mainMenu');
            break;
    
        case "Update Employee":
            l.debug("STATE: update employee");
            var ans = await promptQuestions(questions.updateEmployeeQuestions);
            await e.updateEmployee(ans.column,ans.value,'id',ans.id);
            l.log(`Employee updated! View updated table to confirm your selection`);
            applyState('mainMenu');
            break;

        case 'Delete Employee':
            l.debug('STATE: delete employee');
            var ans = await promptQuestions(questions.deleteEmployeeQuestions);
            await e.deleteEmployee('first_name',ans.name);
            l.log(`Employee deleted! Viwe updated table to confirm your selection`);
            applyState('mainMenu');
            break;

        case "View Roles":
            l.debug("STATE: view roles");
            var data = await r.viewRoles('all');
            if(data.length === 0){
                l.log('Roles table is empty');
            } else {
                console.table(data);
            }
            applyState('mainMenu');
            break;
        
        case 'Add Role':
            l.debug('STATE: add role');
            var ans = await promptQuestions(questions.addRoleQuestions);
            await r.addRole(ans.title,ans.salary,ans.id);
            l.log(`Role added!`);
            applyState('mainMenu'); 
            break;
    
        case 'Update Role':
            l.debug('STATE: update role');
            var ans = await promptQuestions(questions.updateRoleQuestions);
            await r.updateRole( ans.column, ans.value,'title',ans.role);
            l.log('Role updated!');
            applyState('mainMenu');
            break;

        case 'Delete Role':
            l.debug('STATE: delete role');
            var ans = await promptQuestions(questions.deleteRoleQuestions);
            await r.deleteRole('title',ans.title);
            l.log(`Role deleted! Viwe updated table to confirm your selection`);
            applyState('mainMenu');
            break;
        
        case 'View Departments':
            l.debug('STATE: view departments');
            var data = await d.viewDepartments('all');
            if(data.length === 0){
                l.log('Departments table is empty');
            } else {
                console.table(data);
            }
            applyState('mainMenu');
            break;
        
        case 'Add Department':
            l.debug('STATE: add department');
            var ans = await promptQuestions(questions.addDepartmentQuestions);
            await d.addDepartment(ans.name);
            l.log(`Department added!`);
            applyState('mainMenu'); 
            break;

        case 'Update Department':
            l.debug('STATE: update department');
            var ans = await promptQuestions(questions.updateDepartmentQuestions);
            await d.updateDepartment( ans.column, ans.value,'department_name',ans.name);
            l.log('Department updated!');
            applyState('mainMenu');
            break;
        
        case 'Delete Department':
            l.debug('STATE: delete department');
            var ans = await promptQuestions(questions.deleteDepartmentQuestions);
            await d.deleteDepartment('department_name',ans.name);
            l.log(`Department deleted! View updated table to confirm your selection`);
            applyState('mainMenu');
            break;
        
        case "View All Tables":
            l.debug('STATE: view all tables');
            var data1 = await e.viewEmployees('View All');
            var data2 = await d.viewDepartments();
            var data3 = await r.viewRoles();
            l.log(`***EMPLOYEES***`);
            console.table(data1);
            l.log(`***DEPARTMENTS***`);
            console.table(data2);
            l.log(`***ROLES***`);
            console.table(data3);
            applyState('mainMenu');
            break;

        case 'Clear Table':
            l.debug('STATE: clear table');
            var ans = await promptQuestions(questions.clearTableQuestions);
            if(ans.table === 'employee'){
                await e.deleteEmployee('all');
            } else if(ans.table === 'department'){
                await d.deleteDepartment('all');
            } else if(ans.table === 'role'){
                await r.deleteRole('all');
            } else if(ans.table === 'all'){
                await e.deleteEmployee('all');
                await d.deleteDepartment('all');
                await r.deleteRole('all');
            }
            l.log(`Cleared ${ans.table} table`)
            applyState('mainMenu');
            break;

        case 'View Budget':
            var budgetList = [];
            var departments = await d.viewDepartments();
            var employees = await e.viewEmployees('View All');
            for (const dept in departments){
                var departmentTotal = 0;
                for(const employee in employees){
                    if(employees[employee].department_name === departments[dept].department_name){
                        departmentTotal = departmentTotal + Number(employees[employee].salary);
                        l.debug(departmentTotal)
                        l.debug(typeof employees[employee].salary)
                    };
                };
                var entry = 
                {
                    department: `${departments[dept].department_name}`,
                    budget: `$ ${departmentTotal}`
                }
                budgetList.push(entry);
            };
            l.debug(budgetList);
            l.log('***Budget Totals By Department***');
            console.table(budgetList);
            applyState('mainMenu');
            break;

        case "Quit":
            l.debug("STATE: quitter! See you later!");
            db.end();
            break;
    
    };
}

async function promptQuestions(questions){
    // l.debug(`INFO: Prompting ${questions.map(name => name.key)}`);
    // l.debug(typeof questions[0])
    const ans = inquirer.prompt(questions)
    return ans;
};

function checkAnswers(answers){
    l.debug(`INFO: checking answers`);
    
};

main();