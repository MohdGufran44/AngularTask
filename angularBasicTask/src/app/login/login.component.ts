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

  ngOnInit() {
  }

  loginForm = this.builder.group({
    email: [''],
    password: ['']
  });

  onSubmit(){
    // console.log('form     '+this.loginForm.get('email').value);
    // console.log('local     '+localStorage.getItem('email'));
    if(this.loginForm.get('email').value===localStorage.getItem('email')&&this.loginForm.get('password').value===localStorage.getItem('password')){
      localStorage.clear();
      alert("done");
      this.router.navigate(['/home']);
    }else{
      alert("not done");
    }
  }
}
