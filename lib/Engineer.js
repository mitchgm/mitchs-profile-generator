const Employee = require("./Employee.js");

class Engineer extends Employee {
    // this creates and initializes the object
    constructor(employeeName, employeeId, employeeEmail, github) {
        super(employeeName, employeeId, employeeEmail)
        // this accesses the properties of the objects
        this.github = github

    }
    getGitHub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;
// exports the data