var mongoose = require("mongoose");
var EmployeesSchema= new mongoose.Schema({empid:Number, empName:String, empSalary:Number});
var EmployeesModel = mongoose.model('employee',EmployeesSchema,'employee');
mongoose.connect("mongodb://localhost/company");

async function retrieveOneEmployee() {
    try{
        const data = await EmployeesModel.findOne({empSalary:{$gt:35000}});
      // console.log(data);
        console.log(data.empid);
        console.log(data.empName);
        console.log(data.empSalary);

    }catch(error){
        console.log(error);
    }
    mongoose.disconnect();
}
retrieveOneEmployee();