import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  loginform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    cpassword: new FormControl('', [Validators.required]),
  });
  name1 = 'Form submitted Sucessfully';
  Submit() {
    console.log(
      'USERNAME :  ' +
        this.loginform.controls['username'].value +
        ' ' +
        'PASSWORD : ' +
        this.loginform.controls['password'].value
    );
    alert(
      'USERNAME :  ' +
        this.loginform.controls['username'].value +
        ' ' +
        'PASSWORD : ' +
        this.loginform.controls['password'].value
    );
  }
  reseter() {
    this.loginform.reset();
  }
  alerter() {
    alert(this.name1);
  }
}
