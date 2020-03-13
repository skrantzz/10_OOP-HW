// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "Engineer");
    this.github = github;
  }

  getGithub() {
    // do something here
    return this.github;
  }
}
// don't need to write methods from Emp. since we're piggybacking

// const eng1 = new Engineer("Molly", 1, "molly@xyz.com", "molly123");
// const eng2 = new Engineer("Polly", 2, "polly@xyz.com", "polly123");
// const eng3 = new Engineer("Dolly", 3, "dolly@xyz.com", "dolly123");

// all employees will extend the methods too

module.exports = Engineer;
