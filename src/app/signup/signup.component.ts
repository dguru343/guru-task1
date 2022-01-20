import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  user = [
    { id: '001', city: 'India', age: '28' },
    { id: '002', city: 'chennai', age: '33' },
    { id: '003', city: 'salem', age: '19' },
    { id: '004', city: 'banglore', age: '24' },
    { id: '005', city: 'delhi', age: '33' },
  ];
}
