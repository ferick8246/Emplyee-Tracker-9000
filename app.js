const connection = require("./assets/connection.js");
const inquirer = require("inquirer");
const questions = require("./assets/question.js");

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
// Edit Department
async function editDepartments() {
  const { department } = await inquirer.prompt({
    name: "department",
    type: "list",
    message: "Choose one of the following:",
    choices: [
      "Add Department",
      "Remove Department",
      "Exit"
    ]
  })
  if (department === "Add Department") {
    addDepartment();
  }
  if (department === "Remove Department") {
    remDepartment();
  }
  if (department === "Exit") {
    init();
  }
};
//Added Department Function
async function addDepartment() {
  const departmentName = await inquirer.prompt({
    name: "department",
    type: "input",
    message: "What department are you adding",
  });

  const data = departmentName.department

  const query = await connection.query(
    "INSERT INTO department SET ?",
    {
      dept: data,
    },

    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " Department Added\n");
      init();
    });
}
//delete department function
async function remDepartment() {
  connection.query(
    "SELECT dept AS departments FROM department",
    async function (err, departments) {
      const data = await inquirer.prompt([
        {
          name: "departments",
          message: "What department would you like to remove?",
          type: "list",
          choices: departments.map((department) => ({
            name: department.departments,
          })),
        },
      ]);
      connection.query(
        "DELETE FROM department WHERE ?", {
        dept: data.departments,
      }),
        init();
    }
  );
}