const fs = require('fs')
const generateHTML = require('./src/generateHTML');
const inquirer = require("inquirer")
// this creates the page and links node modules


// Each Teams' const link
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const employeeArray = [];


function startGenerator() {
    // function call

    function managerStart() {
        // starting the prompt
        inquirer.prompt(
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
                const intern = new intern(internName, internId, internEmail, internNumber);

                employeeArray.push(intern)
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
                const engineer = new engineer(engineerName, engineerId, engineerEmail, engineerNumber);

                employeeArray.push(engineer)
                // pushing the info
            })
    };

    // function employeeStart() {
    //     // starting the prompt
    //     inquirer.prompt(
    //         [
    //             {
    //                 // setting the promps, each with a message and going to a variable
    //                 type: "input",
    //                 message: "What is the employee's name?",
    //                 name: "employeeName",
    //             },
    //             {
    //                 type: "input",
    //                 message: "What is the employee's id num?",
    //                 name: "employeeId",
    //             },
    //             {
    //                 type: "input",
    //                 message: "What is the employee's email?",
    //                 name: "employeeEmail",
    //             },
    //             {
    //                 type: "input",
    //                 message: "What is the employee's office number?",
    //                 name: "employeeNumber",
    //             },

    //         ])
    //         .then(employeeInfo => {
    //             // putting all the collected info into a variable that can be pushed to our array
    //             const { employeeName, employeeId, employeeEmail, employeeNumber } = employeeInfo;
    //             const employee = new employee(employeeName, employeeId, employeeEmail, employeeNumber);

    //             employeeArray.push(employee)
    //             // pushing the info
    //         })
    // };

    function startTeam() {
        // this is the initial prompt
        inquirer.prompt([{
            type: "list",
            message: "What type of employee will you be collecting info for?",
            name: "addMember",
            choices: ["Employee", "Engineer", "Intern", "Manager", "None"]
            // choice decides the use case for the function
        }]).then(function (input) {
            switch (input.addMember) {
                // each function path based on the initial input
                // case "Employee":
                //     employeeStart();
                //     break;
                case "Engineer":
                    engineerStart();
                    break;
                case "Intern":
                    internStart();
                    break;
                case "Manager":
                    managerStart();
                    break;


                default:
                    defaultCase();
                // the default will run if nothing is selected or the none is chosen 
            }
        })
    }


    function defaultCase() {
        // the default will run if nothing is selected or the none is chosen 
        fs.writeFileSync(output, generate(employeeArray), "UTF-8")
    };






    startTeam();

};




startGenerator();



