import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validator } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private builder: FormBuilder){}
  
  get firstName(){
    return this.registrationForm.get('firstName');
  }

  get lastName(){
    return this.registrationForm.get('lastName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  registrationForm = this.builder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    dob: ['', Validators.required],
    male: [''],
    female: [''],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}")]],
    ConfirmPassword: ['', Validators.required],
    marks: this.builder.group({
      english: [''],
      math: [''],
      science: [''],
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
  }

  home(){
    this.router.navigate(['/home']);
  }

  onSubmit(){
    alert("raza");
    console.log(this.registrationForm.value);
  }

}
