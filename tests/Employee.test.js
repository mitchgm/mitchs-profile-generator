const Employee = require('../lib/Employee');
// linkin the employee library

test("create the new employee objectives", () => {
  const newEmployee = new Employee("Mitch", "mitchysmith@yahoo.com", "73");
  // this is creating the employee ebjects, given an example in the const

  expect(newEmployee.employeeName).toEqual(expect.any(String));
  expect(newEmployee.employeeEmail).toEqual(expect.any(String));
  expect(newEmployee.employeeId).toEqual(expect.any(Number));
  // this is telling each input to expect characters or numbers based on the expected input 

});