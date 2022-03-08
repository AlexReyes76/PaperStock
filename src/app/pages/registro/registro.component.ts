import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  idInspector= new FormControl('',Validators.required);
  password= new FormControl('',Validators.required);
  passwordConfirm= new FormControl('',Validators.required);
  verificar : String = '';
  inspector: any={};

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.inspector={};
    this.inspector["fk_idInspector"]=this.idInspector.value;
    this.inspector["hashed_password"]=this.password.value;
    if(this.idInspector.invalid && this.password.invalid && this.passwordConfirm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Necesita llenar todos los datos!',
        width:'auto'
      })
    }else if(this.password.value!=this.passwordConfirm.value){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        width:'auto'
      })
    }else{
      this.http.post('http://localhost:8888/inspector/createpass',this.inspector).subscribe((res: any)=>{
      Swal.fire({
        icon: 'success',
        title: 'Usuario Exitoso',
        text: 'Gracias por registrarte disfruta de nuestra plataforma',
        width:'auto',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['login'])
    })
    }
    
  }

}
