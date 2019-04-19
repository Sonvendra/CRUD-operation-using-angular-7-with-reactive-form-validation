import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styles: []
})
export class EmpFormComponent implements OnInit {
  @Output() emitData = new EventEmitter();

  maxDate = new Date().toJSON().split('T')[0];
  minDate = new Date('2000-12-30').toJSON().split('T')[0];

  data = {};
  submitted = false;
  addForm: FormGroup;

  constructor(private location: Location, private fb: FormBuilder,
              private EmpService: EmpServiceService, private router: Router,
              public notifier: NotifierService) {
    this.addForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(2)]],
      emp_name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      emp_salary: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      emp_email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      emp_dob: ['', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')]],
      emp_age: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.max(70), Validators.min(20)]],
      emp_join_date: ['', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')]],
      emp_experience: ['', [Validators.required]],
      emp_adr: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  ngOnInit() {
  }
  get f() { return this.addForm.controls; }

  addEmp(type: string, message: string): void {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.EmpService.createEmployee(this.data);
    this.notifier.notify(type, message);
    this.emitData.emit(this.submitted);
  }
  back() {
    this.location.back();
  }
}
