const Logging = require('../utils/logging');
const l = new Logging();

//queries
const viewAll = `
SELECT employee.id, employee.first_name, employee.last_name, role.title, 
department.department_name, role.salary, employee.manager_id
FROM department
JOIN role ON department.id=role.department_id
JOIN employee ON role.id=employee.role_id`;
const viewBySalary = `
SELECT employee.id, employee.first_name, employee.last_name, role.salary
FROM role 
JOIN employee ON employee.role_id=role.id`;
const viewByDepartment = `
SELECT employee.id, employee.first_name, employee.last_name, department.department_name
FROM department
JOIN role ON department.id=role.department_id
JOIN employee ON role.id=employee.role_id`;
const viewByRole = `
SELECT employee.id, employee.first_name, employee.last_name, role.title
FROM role
JOIN employee ON role.id=employee.role_id`;

const addEmployee = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (?, ?, ?, ?)`;

const clearTable = `DELETE FROM employee`;
//variables
var data;


class Employee {
    constructor(connection){
        this.db = connection;
    };

    async addEmployee(name,lastName,roleID,managerID){
        try {
            await this.db.execute(addEmployee, [name,lastName,roleID,managerID]);
            l.debug(`MySQL: added employee ${name} ${lastName} role:${roleID} manager ${managerID}`);
            return true;
        } catch (error) {
            l.debug(error);
            return false;
        };
    };

    async deleteEmployee(param,value){
        try {
            if(param === 'all'){
                this.db.query(clearTable);
                l.debug('MySQL: cleared table employee');
            } else{
                const query = `DELETE FROM employee WHERE ${param}='${value}'`
                this.db.query(query);
                l.debug(`MySQL: cleared employee entry with ${param} = ${value}`);
            };
            return true;
        } catch (error) {
            l.debug(error);
            return false;
        };
    };
    //param dictates view by manager, by salary,by department,by role option
    async viewEmployees(param){
        l.debug(`MySQL: viewing employees ${param}`);
        try {
            switch(param){
                case 'View All':
                    data = await this.db.query(viewAll);
                    break;
                case 'View By Salary':
                    data =  await this.db.query(viewBySalary);
                    break;
                case 'View By Department':
                    data = await this.db.query(viewByDepartment);
                    break;
                case 'View By Role':
                    data = await this.db.query(viewByRole);
                    break;
            }
            if(data[0].length ===0){
                l.debug('MySQL: employee table is empty');
                return data[0];
            } else {
                l.debug(data[0]);
                return data[0];
            }

        } catch (error) {
            l.debug(error);
            return false;
        }

    };

    async updateEmployee(param,value,paramloc,valueloc){
        try {
            this.db.query(`UPDATE employee SET ${param}='${value}' WHERE ${paramloc}='${valueloc}'`)
            l.debug(`MySQL: updated employee ${paramloc} ${valueloc} with ${param} ${value}`)
            return true;
        } catch (error) {
            l.debug(error); 
            return false;
        };

    };
};
module.exports = Employee;