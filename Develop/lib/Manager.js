// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Manager = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, title);
    this.officeNumber = officeNumber;
  }
}

const managers = [
  new Intern("Mary", 1, "Front End Manager"),
  new Intern("Barry", 2, "UX Manager"),
  new Intern("Larry", 3, "Back End Manager")
];
