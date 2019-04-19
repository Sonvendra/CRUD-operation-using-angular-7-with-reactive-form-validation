import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styles: []
})
export class EmpListComponent implements OnInit {
  empdata = true;
  employees: Employee[];

  constructor(private EmpService: EmpServiceService, private router: Router, private notifier: NotifierService) { }

  ngOnInit() {
    this.employees = this.EmpService.f_data;
  }

  deleteEmp(i) {
    if (confirm('Are you sure?')) {
      const index = this.employees.indexOf(i);
      this.employees.splice(index, 1);
    }
  }

  editEmp(editData) {
    this.EmpService.editData = editData;
    this.router.navigate(['/update', editData.id]);
  }
  // public showNotification(type: string, message: string): void {
  //   this.notifier.notify(type, message);
  // }
}
