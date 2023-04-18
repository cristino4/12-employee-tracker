 //imports
 const mysql = require('mysql2');
 const Logging = require('./utils/logging');

//variables

//initializations

const l = new Logging();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password1234',
        database: 'employees_db'
    }, () => {
        log(`Connected to MySQL` )         
    }
);
  