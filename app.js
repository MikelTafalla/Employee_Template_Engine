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
  name: "number"
};
const engineerQuestions = {
  type: "input",
  message: "What is your engineer's github user name?",
  name: "gitUser"
};
const internQuestions = {
  type: "input",
  message: "What is your intern's school?",
  name: "schoolIntern"
};
//Add more employees
const restartQuestion = {
  type: "list",
  message: "Would you like to add another team member?",
  choices: ["yes", "no"],
  name: "restart"
};

//Array to hold the answers
const employeesArr = [];


//Function to start inquirer
async function init() {

  const userResponse = await inquirer.prompt(questions);
  //Deconstruct reponses
  const {name, id, email, role} = userResponse;

  // If role is manager, ask for office number. With that response back, then create a new manager with userResponse and officeNumber response like: const employee = new Manager(name, id, email, officeNumber);
  if (role === "Manager") {
    const officenumber = await inquirer.prompt(managerQuestions);
    //Deconstructing nested object
    const officeNumber = officenumber.number;
    const employee = new Manager(name, id, email, officeNumber);
    // push the manager constructor object into employeesArr
    employeesArr.push(employee);
    
  } else if (role === "Engineer") {
    const gitHub = await inquirer.prompt(engineerQuestions);
    const github = gitHub.gitUser

    const employee = new Engineer(name, id, email, github);
    // push the engineer constructor object into employeesArr
    employeesArr.push(employee);

  } else if (role === "Intern") {
    const schoolObj = await inquirer.prompt(internQuestions);
    const school = schoolObj.schoolIntern
    const employee = new Intern(name, id, email, school);
    // push the intern constructor object into employeesArr
    employeesArr.push(employee);
  };

    // Ask them if they want to add another employee
  const restartInquirer = await inquirer.prompt(restartQuestion);
  const {restart} = restartInquirer;
  if (restart === "yes") {
      init();
  } else {
    console.log(employeesArr)
    //After adding employees, call render function and pass into it the employeesArr. The HTML generated in HTMLrender will be store in the const teamfile
    const teamfile = render(employeesArr);
    //write the team.html and store it in the output path via outputPath. Write the content from the HTML stored in teamfile
    fs.writeFile(outputPath, teamfile, function(err){
      if(err){
        throw err;
      }
    });
  };
  
};

init();