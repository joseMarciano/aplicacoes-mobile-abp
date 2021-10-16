import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPetComponent } from './modal-pet/modal-pet.component';

@Component({
  selector: 'app-my-pets',
  templateUrl: 'my-pets.page.html',
  styleUrls: ['my-pets.page.scss', '../commom-style.page.scss'],
})
export class MyPets {

  teste2 = "Bem loco"

  constructor(
    private modalController: ModalController
  ) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPetComponent,
    });
    return await modal.present();
  }


}
