import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-epmloyee-list',
  templateUrl: './epmloyee-list.component.html',
  styleUrls: ['./epmloyee-list.component.css']
})
export class EpmloyeeListComponent implements OnInit {


  // here also service and router is needed
  // here we declare array of employee
  employees: Employee[]=[];

  constructor(private service:EmployeeService, private router:Router) {}

  ngOnInit(): void {

    this.getEmployees();


  }

  getEmployees(){
    this.service.getEmployeeList().subscribe(data=>{
      this.employees=data;
    })
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);

  }
  deleteEmployee(id:number){
    this.service.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
    })
  }
  


}
