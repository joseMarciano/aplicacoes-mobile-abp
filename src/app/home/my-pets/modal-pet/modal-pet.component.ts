import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-pet',
  templateUrl: './modal-pet.component.html',
  styleUrls: ['./modal-pet.component.scss', '../../commom-style.page.scss'],
})
export class ModalPetComponent {


  @Input()
  public pet = null as any;

  constructor(private modalController: ModalController) { }

  close = async () => {
    await this.modalController.dismiss();
  }
}
