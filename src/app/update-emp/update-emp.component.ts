import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styles: []
})
export class UpdateEmpComponent implements OnInit {
  maxDate = new Date().toJSON().split('T')[0];
  minDate = new Date('2000-01-01').toJSON().split('T')[0];
  f_data = {};
  updateForm: FormGroup;

  constructor(private location: Location, private fb: FormBuilder, private empserv: EmpServiceService, private router: Router) {
    this.updateForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(2)]],
      emp_name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      emp_email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      emp_dob: ['', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')]],
      emp_salary: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      emp_age: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.max(70), Validators.min(20)]],
      emp_join_date: ['', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}'), Validators.max]],
      emp_experience: ['', [Validators.required]],
      emp_adr: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  get validControl() { return this.updateForm.controls; }
  get f() { return this.updateForm.controls; }
  ngOnInit() {
    this.f_data = this.empserv.editData;
  }
  updateEmp() {
    this.empserv.updateEmployee(this.updateForm.value);
    this.router.navigate(['/emp-list']);
  }
  back() {
    this.location.back();
  }
}
