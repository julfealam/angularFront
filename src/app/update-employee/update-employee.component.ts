import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import {FormGroup} from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  //changing from here
 // registrationForm : FormGroup

  

  id!: number;
  employee: Employee=new Employee();

  constructor(private service:EmployeeService, private route:ActivatedRoute,private router:Router,private formbul : FormBuilder) {}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    });
      
  }

  /*setFormState(){
    this.registrationForm = this.formbul.group({
      name :['',Validators.compose([Validators.required, Validators.minLength(3)])],
      address :['', Validators.compose([Validators.required, Validators.minLength(5)])],
      salary :['', Validators.required]

    })
 }*/

  onSubmit(){
    /*if(this.registrationForm.invalid){
      return;
    }*/
    this.service.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.gotoEmployeeList();
    })
  }

  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }



}
