var mongoose = require("mongoose");
var EmployeesSchema = new mongoose.Schema({empid:Number, empName:String,empSalary:Number});
var EmployeesModel= mongoose.model("employee", EmployeesSchema,"employee");

mongoose.connect("mongodb://localhost/company");

async function updateData(){
    try{
    const update =await EmployeesModel.updateOne({empid:105},{$set:{empName:"ajay"}});
    console.log(update);
    }catch(error){
        console.log(error);
    }
    mongoose.disconnect();
}

updateData();