const Employee = require("./Employee.js");

class Intern extends Employee {
    // this creates and initializes the object
    constructor(internName, internId, internEmail, github) {
        super(internName, internId, internEmail)
        // this accesses the properties of the objects
        this.school = school

    }
    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;
// exports the data