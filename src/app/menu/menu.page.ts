import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  // constructor(private animationCtrl: AnimationController) { }
  // enterAnimation = (baseEl: HTMLElement) => {
  //   const root = baseEl.shadowRoot;

  //   const backdropAnimation = this.animationCtrl
  //     .create()
  //     .addElement(root.querySelector('ion-backdrop')!)
  //     .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

  //   const wrapperAnimation = this.animationCtrl
  //     .create()
  //     .addElement(root.querySelector('.modal-wrapper')!)
  //     .keyframes([
  //       { offset: 0, opacity: '0', transform: 'scale(0)' },
  //       { offset: 1, opacity: '0.99', transform: 'scale(1)' },
  //     ]);

  //   return this.animationCtrl
  //     .create()
  //     .addElement(baseEl)
  //     .easing('ease-out')
  //     .duration(500)
  //     .addAnimation([backdropAnimation, wrapperAnimation]);
  // };

  // leaveAnimation = (baseEl: HTMLElement) => {
  //   return this.enterAnimation(baseEl).direction('reverse');
  // };
  public valor: string ='';
  isModalOpen = false;
  isModalOpen1 = false;
  isModalOpen2 = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;

    console.log('error')
    console.log(this.valor)
  }



  setOpen1(isOpen: boolean) {
    this.isModalOpen1 = isOpen;

    console.log('error')
    console.log(this.valor)
  }

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;

    console.log('error')
    console.log(this.valor)
  }

  constructor(){}

  ngOnInit() {
  }

}
