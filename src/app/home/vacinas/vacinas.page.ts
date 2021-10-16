import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalVacinaComponent } from './modal-vacina/modal-vacina.component';

@Component({
  selector: 'app-vacinas',
  templateUrl: 'vacinas.page.html',
  styleUrls: ['vacinas.page.scss','../commom-style.page.scss'],
})
export class Vacinas {

  constructor( private modalController: ModalController) {}


  async openModal() {
    const modal = await this.modalController.create({
      component: ModalVacinaComponent,
    });
    return await modal.present();
  }

}
