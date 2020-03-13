// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, "Intern");
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}

// const interns = [
//     new Intern("Jack", 1, "Front End Intern"),
//     new Intern("Zack", 2, "UX Designer Intern"),
//     new Intern("Mack", 3, "Back End Intern")
// ]

// const intern1 = new Intern("Jack", 1, "jack123@xyz.com", "UCLA");
// const intern2 = new Intern("Zack", 2, "jack123@xyz.com", "MassArt");
// const intern3 = new Intern("Mack", 3, "jack123@xyz.com", "MIT");

module.exports = Intern;
