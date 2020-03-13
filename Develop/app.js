// npm inquirer
// npm run for the scripts in json
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​

// i. inquirer ask questions
  // a. ask Manager their: name id, office number, title, email, role
  // b. Start Employee Creation Mode
    // i. add engineer? - function call so you can call it every time
    // ii. add intern? - function call so you can call it every time
    // iii. finish and create html?


  // c.
// grab that info from inquirer
// const newEng , pass in 

const employeeArray = [{}];

// .then( answers => {
// managerPerson = new Manager (answers.name ...)
// employeeArray.push(managerPerson)
// })
// not gonna write anything to the cards until i have all the things
// for loop empolyee.array for each , if the object.role is manager, do this and push it to the page
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// ask Manager their: name id, office number, title, email, role

inquirer.prompt([
  {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "ID",
      message: "What is your ID?"
    },
    {
      type: "input",
      name: "officeNum",
      message: "What is your office number?"
    },
    {
      type: "input",
      name: "title",
      message: "What is your title?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?"
    },
    {
      type: "input",
      name: "role",
      message: "What is your role?"
    },
    {
      type: "confirm",
      name: "engineer",
      message: "Would you like to add an engineer?"
    }
])

.then(answers => {
if (answers.engineer) {
  addEngineer();
} else if (answers.pathB) {
  pathB();
} else if (answers.pathC) {
  pathC();
}

})

function addEngineer() {
  console.log("You are adding an engineer!");

  inquirer.prompt([
    {
        type: "confirm",
        name: "engineer2",
        message: "Would you like to add another engineer?"
      }
    ]).then(answers => {
      if (answers.pathA) {
        addEngineer();
      } else {
        askPath();
      }
​})
};
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
