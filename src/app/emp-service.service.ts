import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  constructor(private http: HttpClient) { }
  ApiURL: string;
  editData = {};

  f_data = [{
    'id': 1,
    'emp_name': 'Leanne Graham',
    'emp_join_date': '2016-08-12',
    'emp_adr': 'Howemouth',
    'emp_experience': '2 Year',
    'emp_salary': 82800,
    'emp_age': 28,
    'emp_email': 'julianneonner@kory.org',
    'emp_dob': '1980-02-12'
  },
  {
    'id': 2,
    'emp_name': 'Clementine Bauch',
    'emp_join_date': '2016-03-12',
    'emp_adr': 'South Christy',
    'emp_experience': '6 Year',
    'emp_salary': 32500,
    'emp_age': 29,
    'emp_email': 'reypadberg@karina.biz',
    'emp_dob': '1980-10-12'
  },
  {
    'id': 3,
    'emp_name': 'Leanne Graham',
    'emp_join_date': '2011-08-12',
    'emp_adr': 'Roscoeview',
    'emp_experience': '8 Year',
    'emp_salary': 42555,
    'emp_age': 28,
    'emp_email': 'chaimermott@dana.io',
    'emp_dob': '1980-08-12'
  },
  {
    'id': 4,
    'emp_name': 'clementinaduBuque',
    'emp_join_date': '2017-08-11',
    'emp_adr': 'South Elvis',
    'emp_experience': '2 Year',
    'emp_salary': 82800,
    'emp_age': 58,
    'emp_email': 'julianneoconner@kory.org',
    'emp_dob': '1980-02-12'
  },
  {
    'id': 5,
    'emp_name': 'Bauch',
    'emp_join_date': '2015-05-12',
    'emp_adr': 'McKenziehaven',
    'emp_experience': '4 Year',
    'emp_salary': 32500,
    'emp_age': 39,
    'emp_email': 'reypadberg@karina.biz',
    'emp_dob': '1980-10-12'
  },
  {
    'id': 6,
    'emp_name': 'Graham',
    'emp_join_date': '2018-08-12',
    'emp_adr': 'Wisokyburgh',
    'emp_experience': '6 Year',
    'emp_salary': 42555,
    'emp_age': 48,
    'emp_email': 'chaimmcdermott@dana.io',
    'emp_dob': '1980-08-12'
  }];

  createEmployee(data: any) {
    this.f_data.push(data);
  }
  delEmployee(id: number) {
    return this.http.delete<Employee[]>(this.ApiURL + id);
  }
  getEmployeeByID(id: number) {
    return this.http.get<Employee>(this.ApiURL + '/' + id);
  }
  updateEmployee(employee: Employee) {
    return this.http.put(this.ApiURL + '/' + employee.id, employee);
  }
}
