var mongoose = require("mongoose");
var EmployeesSchema = new mongoose.Schema({empid:Number, empName:String, empSalary:Number})
var EmployeesModel = mongoose.model("employee", EmployeesSchema, 'employee');
mongoose.connect("mongodb://localhost/company");

async function deleteData(){
    try{
        //const result = await EmployeesModel.deleteMany({ empSalary: { $lt: 50000 } });  for many data delete 
     const newEmp = await EmployeesModel.deleteOne({empid:106});
     console.log(newEmp);
    }catch(error){
        console.log(error);
    }
    mongoose.disconnect();
}

deleteData();