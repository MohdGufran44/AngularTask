import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch : 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'emplist', component: EmployeeListComponent}
  // {path: 'students', children:[
  //   {path: '', component: StudentsComponent},
  //   {path: ':id', component: EditComponent}
  // ]}
  // {path:'studentEdit/:id',component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
