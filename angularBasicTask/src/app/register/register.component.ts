import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validator } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  

  constructor(private router:Router, private builder: FormBuilder,private datePipe: DatePipe){}
  date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
  get firstName(){
    return this.registrationForm.get('firstName');
  }

  get lastName(){
    return this.registrationForm.get('lastName');
  }

  get dob(){
    return this.registrationForm.get('dob');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  get english(){
    return this.registrationForm.get('marks').get('english');
  }
  get math(){
    return this.registrationForm.get('marks').get('math');
  }
  get science(){
    return this.registrationForm.get('marks').get('science');
  }

  registrationForm = this.builder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("/^[a-zA-Z\s]*$/")]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("/^[a-zA-Z\s]*$/")]],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,30}")]],
    password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}")]],
    ConfirmPassword: ['', Validators.required],
    marks: this.builder.group({
      english: ['', Validators.required],
      math: ['',Validators.required],
      science: ['',Validators.required],
    })
  });
  // registrationForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   dob: new FormControl(''),
  //   male: new FormControl(''),
  //   female: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   ConfirmPassword: new FormControl(''),
  //   marks: new FormGroup({
  //     english: new FormControl(''),
  //     math: new FormControl(''),
  //     science: new FormControl(''),
  //   })
    
  // });

  ngOnInit() {
    console.log(this.date);
  }

  // home(){
  //   this.router.navigate(['/home']);
  // }

  onSubmit(){
    localStorage.setItem("email", this.registrationForm.get('email').value);
    localStorage.setItem("password", this.registrationForm.get('password').value);
    this.router.navigate(['/home']);
    console.log(this.registrationForm);
  }
  status='';
  
  check(){
    let pwd=this.registrationForm.get('password').value;
    let cpwd=this.registrationForm.get('ConfirmPassword').value;
      if((pwd===cpwd)==false){
        this.status="not match";
      }else{
        this.status="";
      }
  }

}
