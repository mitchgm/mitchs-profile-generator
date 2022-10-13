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

    function employeeStart() {
        // starting the prompt
        inquirer.prompt(
            [
                {
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
    }








};






