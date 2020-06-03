const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const questions = [
  { 
    type: "input",
    message: "What is your teammate's name?",
    name: "name"
  },
  { 
    type: "input",
    message: "What is your teammate's ID?",
    name: "id"
  },
  { 
    type: "input",
    message: "What is your teammate's email?",
    name: "email"
  },
  { 
    type: "list",
    message: "What is your teammate's role?",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role"
  }
];
//if manager ask office number if engineer ask github user name if intern ask school
const managerQuestions = {
  type: "input",
  message: "What is your manager's office number?",
  name: "officenumber"
};
const engineerQuestions = {
  type: "input",
  message: "What is your engineer's github user name?",
  name: "github"
};
const internQuestions = {
  type: "input",
  message: "What is your intern's school?",
  name: "school"
};
//Add more employees
const restart = {
  type: "list",
  message: "Would you like to add another team member?",
  choices: ["yes", "no"],
  name: "restart"
};

//Array to hold the answers
const employeeArr = [];
//Function to start inquirer
async function init() {

  const userResponse = await inquirer.prompt(questions);
  //Deconstruct reponses
  const {name, id, email, role} = userResponse;

  // If role is manager, ask for office number. With that response back, then create a new manager with userResponse and officeNumber response like: const employee = new Manager(name, id, email, officeNumber);
  if (role === "Manager") {
    const officeNumber = await inquirer.prompt(managerQuestions);

    const employee = new Manager(name, id, email, officeNumber);

    console.log(employee);
    // push the manager constructor object into employeesArr
    employeeArr.push(employee);
  }
    //If user wants to add another team member, we send the answer to the answerArr array and ask the questions again. If finished, we send the answer to the array and stop the function.
    // Ask them if they want to add another employee
  if (restart === "yes") {
      init();
  } else {
      return;
  };

};
init();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

