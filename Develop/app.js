// npm inquirer
// npm run for the scripts in json
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const employeeNumber = async function() {
  // const thisDumbObject =  { employeeNumber: 4 };

  // const { employeeNum } = thisDumbObject;
  // const employeeNum = thisDumbObject.employeeNum; - same as above

  // employeeNum = 4

  const { employeeNum } = await inquirer.prompt([
    {
      name: "employeeNum",
      message: "How many employees do you want to add?"
    }
  ]);

  return employeeNum;
};

const getContinue = async function() {
  const { addNewEmployee } = await inquirer.prompt([
    {
      name: "addNewEmployee",
      message: "Would you like to add another employee?",
      type: "confirm"
    }
  ]);

  // returns true or false
  return addNewEmployee;
};

const getEmployeeInfo = async function() {
  const answers = await inquirer.prompt([
    {
      name: "name",
      message: "What is your name?"
    },
    {
      name: "ID",
      message: "What is your ID?"
    },
    {
      name: "email",
      message: "What is your email?"
    },
    {
      type: "list",
      name: "role",
      message: "What is your role?",
      choices: ["Engineer", "Intern", "Manager"]
    },
    {
      type: "number",
      name: "officeNumber",
      message: "What is your office number?",
      when: function(answers) {
        return answers.role === "Manager";
      }
    },
    {
      name: "github",
      message: "What is your Github username?",
      when: function(answers) {
        return answers.role === "Engineer";
      }
    },
    {
      name: "school",
      message: "What is your school name?",
      when: function(answers) {
        return answers.role === "Intern";
      }
    }
  ]);
  console.log(answers);
  return answers;
};

async function main() {
  const employeeArray = [];
  let continueQ = true;
  while (continueQ) {
    const employeeData = await getEmployeeInfo();

    continueQ = await getContinue();

    if (employeeData.role === "Manager") {
      const manager = new Manager(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        employeeData.officeNumber
      );
      employeeArray.push(manager);
    } else if (employeeData.role === "Intern") {
      const intern = new Intern(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        employeeData.officeNumber
      );
      employeeArray.push(intern);
    } else if (employeeData.role === "Engineer") {
      const engineer = new Engineer(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        employeeData.officeNumber
      );
      employeeArray.push(engineer);
    }
  }
  render(employeeArray);
  console.log(render(employeeArray));
  fs.writeFile(outputPath, render(employeeArray), () =>
    console.log("file written!")
  );
}
main();
