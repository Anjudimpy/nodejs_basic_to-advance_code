var mongoose = require("mongoose");
var EmployeesSchema= new mongoose.Schema({empid:Number, empName:String, empSalary:Number},{versionKey:false});
var EmployeesModel = mongoose.model("employee",EmployeesSchema,"employee");
mongoose.connect("mongodb://localhost/company");

async function insertData(){
    try{
    var newEmp = new EmployeesModel({empid:105, empName:"Fard", empSalary:50000});
    const data =await newEmp.save();
    console.log("inserted",data);
    }catch(error){
        console.log(error);
    }
    mongoose.disconnect();
}

insertData();