// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//Create constructor to extend the information of the generic employee construtor
class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        //elements from parent
        super(name, id, email);
        //new elements
        this.officenumber = officenumber;
    }
    //Fufill tests
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officenumber;
    }
};

module.exports = Manager;