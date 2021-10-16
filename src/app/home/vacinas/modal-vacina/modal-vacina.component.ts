import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-vacina',
  templateUrl: './modal-vacina.component.html',
  styleUrls: ['./modal-vacina.component.scss', '../../commom-style.page.scss'],
})
export class ModalVacinaComponent implements OnInit {

  
  constructor(private modalController: ModalController) { }

  ngOnInit() { 
  }

  async close(){
    await this.modalController.dismiss();
  }
}
