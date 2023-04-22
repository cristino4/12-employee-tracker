
const queries = 
{
    questions:
    {
        mainMenuQuestions : 
            {
                type: 'list',
                name: 'menuChoice',
                message: "Select an action",
                choices: mainMenuChoice
            },
        viewEmployeesQuestions : 
        {
            type: 'list',
            name: 'viewChoice',
            message:'Select view option',
            choices: viewEmployeesChoice
        },
        addEmployeeQuestions : 
        [
            {
                type: 'input',
                name: 'firstName',
                message: addEmployeeChoice[0]
            },
            {
                type: 'input',
                name: 'lastName',
                message: addEmployeeChoice[1]
            },
            {
                type: 'input',
                name: 'roleID',
                message: addEmployeeChoice[2]
            },
            {
                type: 'input',
                name: 'managerID',
                message: addEmployeeChoice[3]
            }        
        ],
    
    deleteEmployeeQuestions : 
        [
            {
                type: 'input',
                name: 'column',
                message: deleteEmployeeChoice[0]
            },
            {
                type: 'input',
                name: 'value',
                message: deleteEmployeeChoice[1]
            }
        ],
    
    updateEmployeeQuestions : 
        [
            {
                type: 'input',
                name: 'id',
                message: updateEmployeeChoice[0]
            },
            {
                type: 'input',
                name: 'column',
                message: updateEmployeeChoice[1]
            },
            {
                type: 'input',
                name: 'value',
                message: updateEmployeeChoice[2]
            }
        ],
    
    addDepartmentQuestions : 
        [
            {
                type: 'input',
                name: 'name',
                message: addDepartmentChoice[0]
            }
        ],
    
    deleteDepartmentQuestions : 
        [
            {
                type: 'input',
                name: 'name',
                message: deleteDepartmentChoice[0]
            }
        ],
    
    updateDepartmentQuestions : 
        [
            {
                type: 'input',
                name: 'id',
                message: updateDepartmentChoice[0]
            },
            {
                type: 'input',
                name: 'column',
                message: updateDepartmentChoice[1]
            },
            {
                type: 'input',
                name: 'value',
                message: updateDepartmentChoice[2]
            }
        ],
    
    addRoleQuestions : 
        [
            {
                type: 'input',
                name: 'title',
                message: addRoleChoice[0]
            },
            {
                type: 'input',
                name: 'salary',
                message: addRoleChoice[1]
            },
            {
                type: 'input',
                name: 'id',
                message: addRoleChoice[2]
            }
        ],
    
    removeRoleQuestions : 
        [
            {
                type: 'input',
                name: 'title',
                message: removeRoleChoice[0]
            }
        ],
    
    updateRoleQuestions : 
        [
            {
                type: 'input',
                name: 'role',
                message: updateDepartmentChoice[0]
            },
            {
                type: 'input',
                name: 'column',
                message: updateDepartmentChoice[0]
            },
            {
                type: 'input',
                name: 'value',
                message: updateDepartmentChoice[0]
            },
        ],
    },

    choices: 
    {
        mainMenuChoice  : ['View Employees', 'Add Employee', 'Update Employee', 'Delete Employee',
        'View Departments','Add Department', 'Update Department', 'Delete Department',
        'View Roles', 'Add Role', 'Update Role', 'Delete Role'],
        viewEmployeesChoice  : ['View All', 'View By Salary', 'View By Department', 'View By Role'],
        addEmployeeChoice  : ['Enter first name','Enter last name','Enter role ID','Enter manager ID'],
        deleteEmployeeChoice  : ['Enter column','Enter value'],
        updateEmployeeChoice  : ['Enter employee id','Enter column to update', 'Enter new value'],
        addDepartmentChoice  : ['Enter new department name'],
        deleteDepartmentChoice  : ['Enter department name'],
        updateDepartmentChoice  : ['Enter department id', 'column to update','Enter new value'],
        addRoleChoice  : ['Enter the title','Enter the salary','Enter department ID'],
        removeRoleChoice  : ['Enter the title'],
        updateRoleChoice  : ['Enter role title','Enter column to update', 'Enter new value']
    }
};

module.exports = queries;
