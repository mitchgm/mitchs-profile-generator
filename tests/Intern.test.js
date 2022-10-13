const Intern = require('../lib/Intern');
// linking the Intern library

test("create the new Intern objectives", () => {
    const newIntern = new Intern("Mitch", "mitchysmith@yahoo.com", "73");
    // this is creating the Intern ebjects, given an example in the const

    expect(newIntern.internName).toEqual(expect.any(String));
    expect(newIntern.internEmail).toEqual(expect.any(String));
    expect(newIntern.internId).toEqual(expect.any(Number));
    // this is telling each input to expect characters or numbers based on the expected input 

});