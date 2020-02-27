import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  enableEdit: boolean = false;
  
  ngOnInit() {
    if(localStorage.length!=0){
      this.enableEdit=true;
    }
  }

  register(){
    this.router.navigate(['/register']);
  }

  login(){
    this.router.navigate(['/login']);
  }

  stuTask(){
    this.router.navigate(['/students']);
  }

}
