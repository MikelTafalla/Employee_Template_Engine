// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//Create constructor to extend the information of the generic employee construtor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //elements from parent
        super(name, id, email);
        //new elements
        this.officeNumber = officeNumber;
    }
    //Fufill tests
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;