import { StudentsComponent } from './students/students.component';
import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'students', children:[
    {path: '', component: StudentsComponent},
    {path: ':id', component: EditComponent}
  ]}
  // {path:'studentEdit/:id',component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
