import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.css']
})
export class LoginDataComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    mob: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl('', [Validators.required])
  });
  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);

    // alert(this.form.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
