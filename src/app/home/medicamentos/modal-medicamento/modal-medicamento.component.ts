import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-medicamento',
  templateUrl: './modal-medicamento.component.html',
  styleUrls: ['./modal-medicamento.component.scss', '../../commom-style.page.scss'],
})
export class ModalMedicamentoComponent implements OnInit {

  
  constructor(private modalController: ModalController) { }

  ngOnInit() { 
  }

  async close(){
    await this.modalController.dismiss();
  }
}
