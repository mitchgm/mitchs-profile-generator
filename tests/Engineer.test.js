const Engineer = require('../lib/Engineer');
// linking the Engineer library

test("create the new Engineer objectives", () => {
    const newEngineer = new Engineer("Mitch", "mitchysmith@yahoo.com", "73");
    // this is creating the Engineer ebjects, given an example in the const

    expect(newEngineer.engineerName).toEqual(expect.any(String));
    expect(newEngineer.engineerEmail).toEqual(expect.any(String));
    expect(newEngineer.engineerId).toEqual(expect.any(Number));
    // this is telling each input to expect characters or numbers based on the expected input 

});