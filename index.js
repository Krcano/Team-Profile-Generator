const fs = require("fs");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");

// let me = new Engineer("Brett", 1, "email@email.com", "brett git");
// let you = new Engineer("Kelly", 2, "email2@email.com", "kelly git")

const managers = [];
const engineers = [];
const interns = [];

function start() {
  inquirer
    .prompt({
      type: "list",
      name: "employeeType",
      message: "What type of employee do you want to add?",
      choices: ["Manager", "Engineer", "Intern", "exit"],
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

function createEngineer() {
  inquirer.prompt([
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
  .then(data =>{
      let newEngineer = new Engineer(data.Employeename, data.EmployeeId, data.Email, data.Github)
      engineers.push(newEngineer)
      start()
  })
 
}

function createHtml(){

    let html = 
    `<!DOCTYPE html>
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
       `
    // managers.forEach(engineersArrayElement =>{
    //     html += 
    //     `<div>
    //     <h1>${engineersArrayElement.getName()}</h1>
    //     <h2>${engineersArrayElement.getRole()}</h2>
    //   <div>
    //      <p>${engineersArrayElement.getId()}</p> 
    //      <p>${engineersArrayElement.getEmail()}</p>
    //      <p>${engineersArrayElement.getGithub()}</p>
    //   </div>
    // </div>`
    // }) 
    engineers.forEach(engineersArrayElement =>{
        html += 
        `<div>
        <h1>${engineersArrayElement.getName()}</h1>
        <h2>${engineersArrayElement.getRole()}</h2>
      <div>
         <p>${engineersArrayElement.getId()}</p> 
         <p>${engineersArrayElement.getEmail()}</p>
         <p>${engineersArrayElement.getGithub()}</p>
      </div>
    </div>`
    })
   html += 
   `</body>
   </html>` 

   fs.writeFile(`./dist/index.html`, html, err =>{
       console.log(err)
   })
}
start()