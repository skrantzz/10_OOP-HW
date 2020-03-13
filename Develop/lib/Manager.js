// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// const manager1 = new Manager("Mary", 1, "mary@xyz.com", 13);
// const manager2 = new Manager("Barry", 2, "barry@xyz.com", 32);
// const manager3 = new Manager("Carrie", 3, "carrie@xyz.com", 69);

module.exports = Manager;
