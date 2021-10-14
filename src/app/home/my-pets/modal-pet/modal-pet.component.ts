import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-pet',
  templateUrl: './modal-pet.component.html',
  styleUrls: ['./modal-pet.component.scss', '../../commom-style.page.scss'],
})
export class ModalPetComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  async close(){
    await this.modalController.dismiss();
  }
}
