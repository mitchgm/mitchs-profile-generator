const fs = require('fs')
const generateMarkdown = require('./src/generateMarkdown');
const inquirer = require("inquirer")
// this creates the page and links node modules


// Each Teams' const link
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const employeeArray = [];


// function startGenerator() {

function startTeam() {
    // this is the initial prompt
    return inquirer.prompt([{
        type: "list",
        message: "What type of employee will you be collecting info for?",
        name: "addMember",
        choices: ["Engineer", "Intern", "Manager", "None"]
        // choice decides the use case for the function
    }]).then(function (input) {
        if (input.addMember === "Engineer") {
            engineerStart()
        }
        if (input.addMember === "Intern") {
            internStart()
        }
        if (input.addMember === "Manager") {
            managerStart()
        }
        else {
            defaultCase()
        }
        // the default will run if nothing is selected or the none is chosen 

    })
}

const managerStart = () => {
    // starting the prompt
    return inquirer.prompt(
        [
            {
                // setting the promps, each with a message and going to a variable
                type: "input",
                message: "What is the manager's name?",
                name: "managerName",
            },
            {
                type: "input",
                message: "What is the manager's id num?",
                name: "managerId",
            },
            {
                type: "input",
                message: "What is the manager's email?",
                name: "managerEmail",
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "managerNumber",
            },

        ])
        .then(managerInfo => {
            // putting all the collected info into a variable that can be pushed to our array
            const { managerName, managerId, managerEmail, managerNumber } = managerInfo;
            const manager = new Manager(managerName, managerId, managerEmail, managerNumber);

            employeeArray.push(manager)
            console.log(employeeArray)
            // pushing the info
        })
};

// repeat for all the employee types

function internStart() {
    // starting the prompt
    inquirer.prompt(
        [
            {
                // setting the promps, each with a message and going to a variable
                type: "input",
                message: "What is the intern's name?",
                name: "internName",
            },
            {
                type: "input",
                message: "What is the intern's id num?",
                name: "internId",
            },
            {
                type: "input",
                message: "What is the intern's email?",
                name: "internEmail",
            },
            {
                type: "input",
                message: "What is the intern's office number?",
                name: "internNumber",
            },

        ])
        .then(internInfo => {
            // putting all the collected info into a variable that can be pushed to our array
            const { internName, internId, internEmail, internNumber } = internInfo;
            const intern = new Intern(internName, internId, internEmail, internNumber);

            employeeArray.push(intern)
            console.log(employeeArray)
            // pushing the info
        })
};

function engineerStart() {
    // starting the prompt
    inquirer.prompt(
        [
            {
                // setting the promps, each with a message and going to a variable
                type: "input",
                message: "What is the engineer's name?",
                name: "engineerName",
            },
            {
                type: "input",
                message: "What is the engineer's id num?",
                name: "engineerId",
            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "engineerEmail",
            },
            {
                type: "input",
                message: "What is the engineer's office number?",
                name: "engineerNumber",
            },

        ])
        .then(engineerInfo => {
            // putting all the collected info into a variable that can be pushed to our array
            const { engineerName, engineerId, engineerEmail, engineerNumber } = engineerInfo;
            const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerNumber);

            employeeArray.push(engineer)
            console.log(employeeArray)
            // pushing the info
        })
};




function defaultCase(data) {
    // the default will run if nothing is selected or the none is chosen 
    fs.writeFile("./dist/index.html", data, err => {
        console.log(data)
        if (err) {
            console.log(err)
        } else {
            console.log("Team Profile Successfully Generated!")
        }
    })
};






// startTeam();

// };




managerStart()
    .then(employeeArray => {
        return generateMarkdown(employeeArray)
    }).then(htmlData => {
        return defaultCase(htmlData)
    })
    .catch(err => {
        console.log(err)
    })



