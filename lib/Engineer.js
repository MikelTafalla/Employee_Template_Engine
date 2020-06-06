// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //elements from parent
        super(name, id, email);
        //new elements
        this.github = github;
    }
    //Fufill tests
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;