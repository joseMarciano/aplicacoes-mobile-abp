import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-vacina',
  templateUrl: './modal-vacina.component.html',
  styleUrls: ['./modal-vacina.component.scss', '../../commom-style.page.scss'],
})
export class ModalVacinaComponent implements OnInit {

  public vacinas = [
    {
      title: 'Vacina anti-pulgas',
      description: 'Vacina forte para cachorros de médio porte',
      dateNext: '10/05/2021',
      important: true
    },
    {
      title: 'Vacina anti-pulgas',
      description: 'Vacina forte para cachorros de médio porte',
      dateNext: '10/05/2021'
    },
    {
      title: 'Vacina anti-pulgas',
      description: 'Vacina forte para cachorros de médio porte',
      dateNext: '10/05/2021',
      important: true
    },
    {
      title: 'Vacina anti-pulgas',
      description: 'Vacina forte para cachorros de médio porte',
      dateNext: '10/05/2021'
    },
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async close() {
    await this.modalController.dismiss();
  }

  async removeVacina($index, itemSlibind: IonItemSliding) {
    await itemSlibind.closeOpened();
    this.vacinas.splice($index, 1);
  }
}
