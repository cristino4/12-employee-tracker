const dep = require("./departments.json");
const emp = require("./employees.json");
const role = require("./roles.json");

function seedDatabase(connection){
    //seed department data
    var queryInsert = "INSERT INTO employees_db (id, name)";
    //0 index is keyword values, and the rest are the value statements
    var queryValues = [`VALUES`]
    for (let i = 0; i < dep.Departments.length; i++){
        var val;
        val = `(${dep.Departments[i].id},${dep.Departments[i],name},)`
        queryValues.push(val)
    }
    connection.query(queryInsert, (err) =>{
        if (err){
            throw err;
        };
    connection.query("VALUES")
    })
    //seed employee data

    //seed role data
}
module.exports = seedDatabase;