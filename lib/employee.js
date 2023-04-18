class Employee {
    constructor(name,lastName,roleID,managerID,connection){
        this.name = name;
        this.lastName = lastName;
        this.roleID = roleID;
        this.managerID = managerID;
        this.db = connection;
    };

    addEmployee(){
        try {
            
        } catch (error) {
            
        }
    };

    removeEmployee(){

    };
    //param dictates view by manager, by salary,by department,by role option
    viewEmployees(param){
        try {
            switch(param){
                case "bySalary":
                    break;
                case "byDepartment":
                    break;
                case "byRole":
                    break;
            }
        } catch (error) {
            
        }
    };

    updateEmployee(){
        
    };
};
module.exports = Employee;