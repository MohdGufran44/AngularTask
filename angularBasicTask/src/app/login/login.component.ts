import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private builder:FormBuilder) { }
  loginStatus

  ngOnInit() {
  }

  loginForm = this.builder.group({
    email: [''],
    password: ['']
  });

  onSubmit(){
    if(this.loginForm.get('email').value===localStorage.getItem('email')&&this.loginForm.get('password').value===localStorage.getItem('password')){
      localStorage.clear();
      this.router.navigate(['/home']);
    }else{
      this.loginStatus = "username and password is incorrect";
    }
  }
}
