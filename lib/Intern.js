// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, schoolIntern) {
        //elements from parent
        super(name, id, email);
        //new elements
        this.schoolIntern = schoolIntern;
    }
    //Fufill tests
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.schoolIntern;
    }
};

module.exports = Intern;