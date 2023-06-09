import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Misión y Visión', url: '/mision-vision', icon: 'eye' },
    { title: 'Servicios', url: '/servicios', icon: 'construct' },
    { title: 'Contacto', url: '/contacto', icon: 'call' },
    { title: 'Menú', url: '/menu', icon: 'cafe' },
    
  ];

  public appSubMenu = [
    { title: 'menu 2', url: '/login', icon: 'home' },
    { title: 'menu 3', url: '/register', icon: 'eye' },    
  ];
  constructor() {}
}
