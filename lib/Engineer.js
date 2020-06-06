// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitUser) {
        //elements from parent
        super(name, id, email);
        //new elements
        this.gitUser = gitUser;
    }
    //Fufill tests
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.gitUser;
    }
};

module.exports = Engineer;