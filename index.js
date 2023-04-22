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

    // await seedDatabase(db);
    // await e.viewEmployees('all');
    // await e.viewEmployees('bySalary');
    // await e.viewEmployees('byDepartment');
    // await e.viewEmployees('byRole');
    // await e.addEmployee('john','bullshit',1,1);
    // await e.viewEmployees('all');

    // await e.removeEmployee('role_id',3);
    // await e.updateEmployee('role_id',3,'id',1);
    // await e.viewEmployees('all');

    // await e.deleteEmployee('first_name','cristino');
    // await d.viewDepartmentBySalary();
    // await d.viewDepartments();
    // await d.deleteDepartment('id',3)
    await r.viewRoles();
    // await d.updateDepartment('department_name',"cum department",'id',2)
    await r.removeRole('all');
    // await d.addDepartment('Porn Department');
    await r.viewRoles();

    db.end();


};

function seedDatabase(connection){
    try {
        connection.query(`source db/seed.sql`);
    } catch (error) {
        l.debug(error)
    }        
    return;
}
main();