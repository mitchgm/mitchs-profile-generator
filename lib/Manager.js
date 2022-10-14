const Employee = require("./Employee.js");

class Manager extends Employee {
    // this creates and initializes the object
    constructor(managernName, managernId, managernEmail, github) {
        super(managernName, managernId, managernEmail)
        // this accesses the properties of the objects
        this.github = github

    }
    getofficeNum() {
        return this.officeNum
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;
// exports the data