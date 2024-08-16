
const mongoose = require('mongoose');
const EmployeesSchema = new mongoose.Schema({  empid: Number, empName: String, empSalary: Number});

var EmployeesModel = mongoose.model('employee', EmployeesSchema, 'employee');

mongoose.connect('mongodb://localhost/company')

async function retrieveEmployees() {
    try {
     const data = await EmployeesModel.find();  //whithout condition
       // const data = await EmployeesModel.find({empSalary:{$gt:35000}}); //with codition
        //console.log('Data retrieved:', data);
        for(var i=0; i<data.length; i++){
         console.log(data[i].empid);
         console.log(data[i].empName);
         console.log(data[i].empSalary);
         console.log("..................");
        }
        
    } catch (error) {
        console.error('Error retrieving employees:', error);
    }
    mongoose.disconnect();
}

retrieveEmployees();

