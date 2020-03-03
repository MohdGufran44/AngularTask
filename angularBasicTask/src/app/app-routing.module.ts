import { ComponentsDirectivesComponent } from './components-directives/components-directives.component';
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
  {path: 'components-directives', component: ComponentsDirectivesComponent}
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
