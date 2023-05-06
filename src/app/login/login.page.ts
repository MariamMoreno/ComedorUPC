import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  public valor: string ='hola mundo';
  public correo: string ='';

  constructor(public fb: FormBuilder) {

    this.formularioLogin = this.fb.group({
      'email': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    })
  }

  ngOnInit() {
  }

  ingresar(){

    // var login = this.formularioLogin.value;
    // if (this.formularioLogin.invalid) {
    //   console.log("Debes llenar todos los campos")
    // }

    // var usuario = {
    //   email: login.email,
    //   password: login.password
    // }

    console.log(this.valor)
    console.log(this.correo)
    
  }
}
