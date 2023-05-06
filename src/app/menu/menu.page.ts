import { Component, OnInit } from '@angular/core';
import { AlertController, AnimationController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public alerController: AlertController, public fb: FormBuilder){
    this.formularioLogin = this.fb.group({
      'documento': new FormControl("", Validators.required),
      'nombre': new FormControl("", Validators.required),
    })
  }
  
  public valor: string ='';
  public contador: string ='';

  isModalOpen = false;
  isModalOpen1 = false;
  isModalOpen2 = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;

    console.log('error')
    console.log(this.valor)
  }

  setClose(isOpen: boolean, ingreso: string) {
    this.isModalOpen = isOpen;

    console.log('error')
    console.log(ingreso)

    
    if(ingreso == '1'){
      this.contador = "Seleccionaste una 'Tosta de aguacate con anchoas y tomates cherry' su valor es de '$10.000' ";
    }

    if(ingreso == '2'){
      this.contador = "Seleccionaste unas 'Tostas de tomate y mozzarella con mortadela' su valor es de '$20.000' ";
    }

    if(ingreso == '3'){
      this.contador = "Seleccionaste unas 'Gofres keto o chaffles' su valor es de '$8.000' ";
    }

    if(ingreso == '4'){
      this.contador = "Seleccionaste unas 'Tostadas de tomate y Mozarella' su valor es de '$12.000' ";
    }

    if(ingreso == '5'){
      this.contador = "Seleccionaste un 'Bizcocho de yogur' su valor es de '$11.000' ";
    }
  }

  setClose1(isOpen1: boolean, ingreso: string) {
    this.isModalOpen1 = isOpen1;

    console.log('error')
    console.log(ingreso)

    
    if(ingreso == '1'){
      this.contador = "Seleccionaste un almuerzo 'Arroces y pasta' su valor es de '$25.000' ";
    }

    if(ingreso == '2'){
      this.contador = "Seleccionaste un almuerzo 'Pescados y mariscos' su valor es de '$30.000' ";
    }

    if(ingreso == '3'){
      this.contador = "Seleccionaste un almuerzo 'Solomillo de cerdo' su valor es de '$35.000' ";
    }

    if(ingreso == '4'){
      this.contador = "Seleccionaste un almuerzo 'Bocadillos y sándwiches' su valor es de '$27.000' ";
    }

    if(ingreso == '5'){
      this.contador = "Seleccionaste un almuerzo 'Ensalada de lechuga' su valor es de '$24.000' ";
    }
  }

  setClose2(isOpen2: boolean, ingreso: string) {
    this.isModalOpen2 = isOpen2;

    console.log('error')
    console.log(ingreso)

    
    if(ingreso == '1'){
      this.contador = "Seleccionaste una cena 'Pollo con verduras al papillote' su valor es de '$25.000' ";
    }

    if(ingreso == '2'){
      this.contador = "Seleccionaste una cena 'Salmón crujiente con patatas y espárragos' su valor es de '$30.000' ";
    }

    if(ingreso == '3'){
      this.contador = "Seleccionaste una cena 'Falso sándwich de tortilla' su valor es de '$15.000' ";
    }

    if(ingreso == '4'){
      this.contador = "Seleccionaste una cena 'Brocheta de coles con salsa de cacahuete' su valor es de '$27.000' ";
    }

    if(ingreso == '5'){
      this.contador = "Seleccionaste una cena 'Brocheta de coles con salsa de cacahuete' su valor es de '$27.000' ";
    }
  }



  setOpen1(isOpen1: boolean) {
    this.isModalOpen1 = isOpen1;

    console.log('error')
    console.log(this.valor)
  }

  

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;

    console.log('error')
    console.log(this.valor)
  }

  async enviar(){

    if(this.contador == ''){
      const alert = await this.alerController.create({
        cssClass: 'my-custom-class',
        header: "Error en el pedido!",
        // subHeader: 'Su orden ha sido recibida',
        message: 'Debe seleccionar una comida',
        buttons: ['OK']
      })
  
      await alert.present();
    }else{
      // console.log("este es contaador cuando se envía " + this.contador)
      const alert = await this.alerController.create({
        cssClass: 'my-custom-class',
        header: "Pedido Exitoso!",
        subHeader: 'Su orden ha sido recibida',
        message: this.contador,
        buttons: ['OK']
      })
  
      await alert.present();
    }

  }



  ngOnInit() {
  }

}
