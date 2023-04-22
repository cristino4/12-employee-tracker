const Logging = require('../utils/logging');
const l = new Logging();


//constants
var data;
//queries

const viewAll = `
SELECT * from department
`;

const viewDepartmentBySalary = `
SELECT department.id, department.department_name, employee.id, role.salary
FROM department
JOIN role ON department.id=role.department_id
JOIN employee ON role.id=employee.role_id
`;

const addDepartment = `INSERT INTO department (department_name)
VALUES (?)`;

const clearTable = `DELETE FROM department`;

class Department {
    constructor(connection){
        this.db = connection;
    };

    async viewDepartments(){
        try {
            data = await this.db.query(viewAll);
            l.debug(`MySQL: viewing all departments`);
            if(data[0].length ===0){
                l.debug('MySQL: department table is empty');
            } else {
                l.debug(data[0]);
            }
        } catch (error) {
            l.debug(error);
            return false;
        };
    };

    async deleteDepartment(param,identifier){
        try {
            if(param === 'all'){
                this.db.query(clearTable);
                l.debug('MySQL: cleared table department');
            } else{
                const query = `DELETE FROM department WHERE ${param}='${identifier}'`
                this.db.query(query);
                l.debug(`MySQL: cleared department entry with ${param} ${identifier}`);
            };
            return true;
        } catch (error) {
            l.debug(error);
            return false;
        }
    };

    
    async addDepartment(department_name){
        try {
            await this.db.execute(addDepartment, [department_name]);
            l.debug(`MySQL: added department ${department_name}`);
            return true;
        } catch (error) {
            l.debug(error);
            return false;
        };
    };

    async updateDepartment(param,value,paramloc,valueloc){
        try {
            this.db.query(`UPDATE department SET ${param}='${value}' WHERE ${paramloc}='${valueloc}'`);
            l.debug(`MySQL: updated department ${paramloc} ${valueloc} with ${param} ${value}`);
            return true;
        } catch (error) {
            l.debug(error); 
            return false;
        }
    };
};

module.exports = Department;