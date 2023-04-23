const choices = 
    {
        mainMenuChoice  : ['View Employees', 'Add Employee', 'Update Employee', 'Delete Employee',
        'View Departments','Add Department', 'Update Department', 'Delete Department',
        'View Roles', 'Add Role', 'Update Role', 'Delete Role','View All Tables', 'Clear Table','View Budget', 'Quit'],
        viewEmployeesChoice  : ['View All', 'View By Salary', 'View By Department', 'View By Role'],
        addEmployeeChoice  : ['Enter first name','Enter last name','Enter role ID','Enter manager ID'],
        deleteEmployeeChoice  : ['Enter employee name'],
        updateEmployeeChoice  : ['Enter employee ID','Enter column to update', 'Enter new value'],
        addDepartmentChoice  : ['Enter new department name'],
        deleteDepartmentChoice  : ['Enter department name'],
        updateDepartmentChoice  : ['Enter department name', 'column to update','Enter new value'],
        addRoleChoice  : ['Enter the title','Enter the salary','Enter department ID'],
        deleteRoleChoice  : ['Enter the title'],
        updateRoleChoice  : ['Enter role title','Enter column to update', 'Enter new value'],
        clearTableChoice :['all','employee', 'role', 'department']
    };


const questions =
    {
        mainMenuQuestions : 
            {
                type: 'list',
                name: 'menu',
                message: "Select an action",
                choices: choices.mainMenuChoice
            },
        viewEmployeesQuestions : 
        {
            type: 'list',
            name: 'view',
            message: 'Select view option',
            choices: choices.viewEmployeesChoice
        },
        addEmployeeQuestions : 
        [
            {
                type: 'input',
                name: 'firstName',
                message: choices.addEmployeeChoice[0]
            },
            {
                type: 'input',
                name: 'lastName',
                message: choices.addEmployeeChoice[1]
            },
            {
                type: 'input',
                name: 'roleID',
                message: choices.addEmployeeChoice[2]
            },
            {
                type: 'input',
                name: 'managerID',
                message: choices.addEmployeeChoice[3]
            }        
        ],
    
    deleteEmployeeQuestions : 
        [
            {
                type: 'input',
                name: 'name',
                message: choices.deleteEmployeeChoice[0]
            }
        ],
    
    updateEmployeeQuestions : 
        [
            {
                type: 'input',
                name: 'id',
                message: choices.updateEmployeeChoice[0]
            },
            {
                type: 'input',
                name: 'column',
                message: choices.updateEmployeeChoice[1]
            },
            {
                type: 'input',
                name: 'value',
                message: choices.updateEmployeeChoice[2]
            }
        ],
    
    addDepartmentQuestions : 
        [
            {
                type: 'input',
                name: 'name',
                message: choices.addDepartmentChoice[0]
            }
        ],
    
    deleteDepartmentQuestions : 
        [
            {
                type: 'input',
                name: 'name',
                message: choices.deleteDepartmentChoice[0]
            }
        ],
    
    updateDepartmentQuestions : 
        [
            {
                type: 'input',
                name: 'name',
                message: choices.updateDepartmentChoice[0]
            },
            {
                type: 'input',
                name: 'column',
                message: choices.updateDepartmentChoice[1]
            },
            {
                type: 'input',
                name: 'value',
                message: choices.updateDepartmentChoice[2]
            }
        ],
    
    addRoleQuestions : 
        [
            {
                type: 'input',
                name: 'title',
                message: choices.addRoleChoice[0]
            },
            {
                type: 'input',
                name: 'salary',
                message: choices.addRoleChoice[1]
            },
            {
                type: 'input',
                name: 'id',
                message: choices.addRoleChoice[2]
            }
        ],
    
    deleteRoleQuestions : 
        [
            {
                type: 'input',
                name: 'title',
                message: choices.deleteRoleChoice[0]
            }
        ],
    
    updateRoleQuestions : 
        [
            {
                type: 'input',
                name: 'role',
                message: choices.updateRoleChoice[0]
            },
            {
                type: 'input',
                name: 'column',
                message: choices.updateRoleChoice[1]
            },
            {
                type: 'input',
                name: 'value',
                message: choices.updateRoleChoice[2]
            },
        ],
    clearTableQuestions : 
        [
            {
                type: 'list',
                name: 'table',
                message: 'Select a table to clear',
                choices: choices.clearTableChoice
            }
        ]
    };



module.exports = {questions,choices};
