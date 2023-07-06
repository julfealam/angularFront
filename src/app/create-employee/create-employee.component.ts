import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import {FormGroup} from '@angular/forms';
import { FormBuilder, Validators,FormArray,UntypedFormBuilder,FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //changing from here
  //registrationForm : FormGroup

  employee:Employee = new Employee();   // creating object of new employee

  constructor(private service:EmployeeService, private router:Router, private formbul : FormBuilder) {}

  ngOnInit(): void {
   // this.setFormState();
      
  }

 /* setFormState(){
    this.registrationForm = this.formbul.group({
      name :['',Validators.compose([Validators.required, Validators.minLength(3)])],
      address :['', Validators.compose([Validators.required, Validators.minLength(5)])],
      salary :['', Validators.required]

    })
 }*/
  
// now we crete funtion for save employee

saveEmployee(){
  this.service.createEmployee(this.employee).subscribe(data=>{
    this.gotoEmployeeList();
  })
}

gotoEmployeeList(){
  this.router.navigate(['/employees']);

}
onSubmit(){
  /*if(this.registrationForm.invalid){
    return;
  }*/
  this.saveEmployee();
}
}
