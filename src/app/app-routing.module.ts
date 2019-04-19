import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: EmpListComponent, pathMatch: 'full' },
  { path: 'emp-list', component: EmpListComponent },
  { path: 'update/:id', component: UpdateEmpComponent },
  { path: 'emp-form', component: EmpFormComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
