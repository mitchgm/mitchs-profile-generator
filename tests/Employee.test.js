var Employee = require('../lib/Employee')


test('get the Employee name', () => {
  var employee = new Employee("Brad", 2, "test@test.com")

  expect(employee.name).toBe("Brad")
});

test('Can get the Employee name using get nameName()', () => {
  var employee = new Employee("Brad", 2, "test@test.com")

  expect(employee.getName()).toBe("Brad")
});

test('can get the id', () => {
  var employee = new Employee("Brad", 2, "test@test.com")

  expect(employee.id).toBe(2)
});

test('Can get the Employee id using getID()', () => {
  var employee = new Employee("Brad", 2, "test@test.com")

  expect(employee.getId()).toBe(2);
});

test('caan get email>?', () => {
  var employee = new Employee("Brad", 2, "test@test.com")

  expect(employee.email).toBe("test@test.com")
});

test('Can get the Employee email using get nameEmail()', () => {
  var employee = new Employee("Brad", 2, "test@test.com")

  expect(employee.getEmail()).toBe("test@test.com")
});

test('Can get the Employee Role?()', () => {
  var employee = new Employee("Brad", 2, "test@test.com")

  expect(employee.getRole()).toBe("Employee")
});