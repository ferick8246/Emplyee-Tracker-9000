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
//Edit Employee function 
async function editEmployee() {
  const { employee } = await inquirer.prompt({
    name: "employee",
    type: "list",
    message: "What would you like to do?",
    choices: ["Add Employee", "Remove Employee", "Exit"],
  });
  if (employee === "Add Employee") {
    addEmployee();
  } else if (employee === "Remove Employee") {
    removeEmployee();
  } else {
    init();
  }
}
// Add employee function
async function addEmployee() {
  const add = await inquirer.prompt([
    {
      name: "firstName",
      type: "input",
      message: "What is the employee's first name?",
    },
    {
      name: "lastName",
      type: "input",
      message: "What is the employee's last name?",
    },
    {
      name: "roleID",
      type: "list",
      message: "What is the employee's role?",
      choices: [
        "Intern",
        "IT",
        "Engineer",
      ]
    },
    {
      name: "managerID",
      type: "confirm",
      message: "Is the employee a manager?",
    },
  ]);
  switch (add.managerID) {
    case true:
      add.managerID = 1;
      break;
    case false:
      add.managerID = null;
      break;
  }
  const query = await connection.query(
    "INSERT INTO employee SET ?",
    {
      first_name: add.firstName,
      last_name: add.lastName,
      role_id: add.roleID,
      manager_id: add.managerID,
    },

    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " Employee Added\n");
      init();
    });
}

