const connection = require("/assets/connection.js");
const inquirer = require("inquirer");
const questions = require("/assets/question.js");

init();

async function init() {
const { action } = await inquirer.prompt(questions);
    switch (action) {
    case "Edit Department":
     editDepartments();
      break;
    case "Edit Employee Role":
      editRole();
      break;
    case "Edit Employee":
      editEmployee();
      break;
    case "View Information":
      viewInfo();
      break;
    case "Exit":
      process.exit(0);
      break;
    default:
      break;
  }
}
// View 
async function viewInfo() {
    const { letsGo } = await inquirer.prompt({
      name: 'letsGo',
      type: 'list',
      message: 'Select a topic',
      choices: ['Employees', 'Departments', 'Roles']
    });
    let query;
    if (letsGo === 'Employees') {
      query = `SELECT  employee.first_name, employee.last_name,
        role.title, role.salary, department.dept AS department
        FROM ((employee
        INNER JOIN role ON employee.role_id = role.id)
        INNER JOIN department ON role.dept_id = department.id)
        ORDER BY department`;
    } else if (letsGo === 'Departments') {
      query = `SELECT dept FROM department`;
    } else if (letsGo === 'Roles') {
      query = `SELECT role.title, role.dept_id AS id, department.dept AS department FROM role 
      INNER JOIN department ON role.dept_id = department.id ORDER BY title ASC`;
    }
    const data = await connection.query(query);
    console.table(data);
    init();
  }