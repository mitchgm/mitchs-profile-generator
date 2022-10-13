const Manager = require('../lib/Manager');
// linking the Manager library

test("create the new Manager objectives", () => {
    const newManager = new Manager("Mitch", "mitchysmith@yahoo.com", "73");
    // this is creating the Manager ebjects, given an example in the const

    expect(newManager.managerName).toEqual(expect.any(String));
    expect(newManager.managerEmail).toEqual(expect.any(String));
    expect(newManager.managerId).toEqual(expect.any(Number));
    // this is telling each input to expect characters or numbers based on the expected input 

});