const Logging = require('../utils/logging');
const l = new Logging();

//queries

const viewAll = `
SELECT * from role
`;

const addRole = `INSERT INTO role (title,salary,department_id)
VALUES (?,?,?)`;

const clearTable = `DELETE FROM role`;

//variables
var data;

class Roles {
    constructor(connection){
        this.db = connection;
    };

    async viewRoles(){
        try {
            data = await this.db.query(viewAll);
            l.debug(`MySQL: viewing all roles`);
            if(data[0].length ===0){
                l.debug('MySQL: roles table is empty');
            } else {
                l.debug(data[0]);
            }
        } catch (error) {
            l.debug(error);
            return false;
        };
    };

    async addRole(title,salary,department_id){
        try {
            await this.db.execute(addRole, [title,salary,department_id]);
            l.debug(`MySQL: added role ${title} with salary ${salary} and department ID ${department_id}`);
            return true;
        } catch (error) {
            l.debug(error);
            return false;
        };
    };
    

    async removeRole(param,value){
        try {
            if(param === 'all'){
                this.db.query(clearTable);
                l.debug('MySQL: cleared table role');
            } else{
                const query = `DELETE FROM role WHERE ${param}='${value}'`
                this.db.query(query);
                l.debug(`MySQL: cleared role entry with ${param} = ${value}`);
            };
            return true;
        } catch (error) {
            l.debug(error);
            return false;
        };
    };

    async updateRole(param,value,paramloc,valueloc){
        try {
            this.db.query(`UPDATE role SET ${param}='${value}' WHERE ${paramloc}='${valueloc}'`)
            l.debug(`MySQL: updated role ${paramloc} ${valueloc} with ${param} ${value}`)
            return true;
        } catch (error) {
            l.debug(error); 
            return false;
        };
    };
};

module.exports = Roles;