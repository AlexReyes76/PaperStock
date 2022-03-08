import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  idInspector= new FormControl('',Validators.required);
  password= new FormControl('',Validators.required);
  verificar : String = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
