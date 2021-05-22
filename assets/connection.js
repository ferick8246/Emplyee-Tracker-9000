const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2696",
  database: "employee_DB",
  
});

connection.connect();

// Setting up connection.query for promises instead of callbacks allowing to useasync/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;