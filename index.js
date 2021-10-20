const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const managers = [];
const engineers = [];
const interns = [];

// asks for employee type
function start() {
  inquirer
    .prompt({
      type: "list",
      name: "employeeType",
      message: "What type of employee do you want to add?",
      choices: ["Manager", "Engineer", "Intern", "Exit"],
    })
    .then((data) => {
      if (data.employeeType === "Manager") {
        createManager();
      } else if (data.employeeType === "Engineer") {
        createEngineer();
      } else if (data.employeeType === "Intern") {
        createIntern();
      } else {
        createHtml();
      }
    });
}
// Manager Inquirer Prompts
function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Employeename",
        message: "What is the employee's name?",
      },

      {
        type: "input",
        name: "EmployeeId",
        message: "What is their employee id number",
      },
      {
        type: "input",
        name: "Email",
        message: "What is their email?",
      },
      {
        type: "input",
        name: "OfficeNumber",
        message: "What is their office number?",
      },
    ])
    .then((data) => {
     
      let newManager = new Manager(
        data.Employeename,
        data.EmployeeId,
        data.Email,
        data.OfficeNumber
      );
      managers.push(newManager);

      start();
    });
}

// Engineer inquirer Prompts
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Employeename",
        message: "What is the employee's name?",
      },

      {
        type: "input",
        name: "EmployeeId",
        message: "What is their employee id number",
      },
      {
        type: "input",
        name: "Email",
        message: "What is their email?",
      },
      {
        type: "input",
        name: "Github",
        message: "What is their github?",
      },
    ])
    .then((data) => {
      let newEngineer = new Engineer(
        data.Employeename,
        data.EmployeeId,
        data.Email,
        data.Github
      );
      engineers.push(newEngineer);

      start();
    });
}
// Intern quirer prompts
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Employeename",
        message: "What is the employee's name?",
      },

      {
        type: "input",
        name: "EmployeeId",
        message: "What is their employee id number",
      },
      {
        type: "input",
        name: "Email",
        message: "What is their email?",
      },
      {
        type: "input",
        name: "School",
        message: "What school are they attending?",
      },
    ])
    .then((data) => {
      let newIntern = new Intern(
        data.Employeename,
        data.EmployeeId,
        data.Email,
        data.School
      );
      interns.push(newIntern);

      start();
    });
}
// Creates html cards for each type of employee
function createHtml() {
  let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <h1>My Team Profiles</h1>
         
        </header>
        <div class="all-card-container">
       `;
  managers.forEach((engineersArrayElement) => {
    html += `
    <div class="individual-card-container">
    <h1 class="name-role">${engineersArrayElement.getName()}</h1>
    <h2 class="name-role">${engineersArrayElement.getRole()}</h2>
  <div class="employee-descriptions-container">
    <div class="employee-descriptions">
      <p>ID: ${engineersArrayElement.getId()}</p>
    </div>
    <div class="employee-descriptions">
      <p>Email: <a href=mailto:${engineersArrayElement.getEmail()}>${engineersArrayElement.getEmail()}</a></p>
    </div>
    <div class="employee-descriptions">
      <p>Office: ${engineersArrayElement.getOfficeNumber()}</p>
    </div>
    </div>
    </div>`;
  });
  engineers.forEach((engineersArrayElement) => {
    html += `
        <div class="individual-card-container">
        <h1 class="name-role">${engineersArrayElement.getName()}</h1>
        <h2 class="name-role">${engineersArrayElement.getRole()}</h2>
      <div class="employee-descriptions-container">
        <div class="employee-descriptions">
          <p>ID: ${engineersArrayElement.getId()}</p>
        </div>
        <div class="employee-descriptions">
        <p>Email: <a href=mailto:${engineersArrayElement.getEmail()}>${engineersArrayElement.getEmail()}</a></p>
        </div>
        <div class="employee-descriptions">
          <p>Github: <a href=https://github.com/${engineersArrayElement.getGithub()}>${engineersArrayElement.getGithub()}</a></p>
        </div>
        </div>
        </div>
      `;
  });
  interns.forEach((engineersArrayElement) => {
    html += 
    `<div class="individual-card-container">
    <h1 class="name-role">${engineersArrayElement.getName()}</h1>
    <h2 class="name-role">${engineersArrayElement.getRole()}</h2>
  <div class="employee-descriptions-container">
    <div class="employee-descriptions">
      <p>ID: ${engineersArrayElement.getId()}</p>
    </div>
    <div class="employee-descriptions">
    <p>Email: <a href=mailto:${engineersArrayElement.getEmail()}>${engineersArrayElement.getEmail()}</a></p>
    </div>
    <div class="employee-descriptions">
      <p>School: ${engineersArrayElement.getSchool()}</p>
    </div>
    </div>
    </div>`;
  });
  html += `
   </div>
   </div>
   </body>
   </html>`;

  fs.writeFile(`./dist/index.html`, html, (err) => {
    console.log(err);
  });
}
start();
