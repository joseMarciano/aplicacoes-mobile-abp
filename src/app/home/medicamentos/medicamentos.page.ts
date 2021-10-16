import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMedicamentoComponent } from './modal-medicamento/modal-medicamento.component';

@Component({
  selector: 'app-medicamentos',
  templateUrl: 'medicamentos.page.html',
  styleUrls: ['medicamentos.page.scss','../commom-style.page.scss'],
})
export class Medicamentos {

  constructor(private modalController: ModalController) {

  }


  async openModal() {
    const modal = await this.modalController.create({
      component: ModalMedicamentoComponent,
    });
    return await modal.present();
  }

}
