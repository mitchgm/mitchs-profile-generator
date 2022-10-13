// creating employee

class Employee {
    constructor(employeeName, employeeId, employeeEmail) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail;
    }


    // this returns all the inputs we got 
    getemployeeName() {
        return this.employeeName;
    }

    getemployeeId() {
        return this.employeeId;
    }

    getemployeeEmail() {
        return this.employeeEmail;
    }

    getRole() {
        return "Employee"
    }

}

module.exports = Employee;