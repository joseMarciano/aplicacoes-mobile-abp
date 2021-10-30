import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMedicamentoComponent } from './modal-medicamento/modal-medicamento.component';

interface Pageable {
  offset: number;
  limit: number;
  total: number;
  content: any[];
}
@Component({
  selector: 'app-medicamentos',
  templateUrl: 'medicamentos.page.html',
  styleUrls: ['medicamentos.page.scss', '../commom-style.page.scss'],
})
export class Medicamentos implements OnInit {

  public pets = [];

  public loadingTracker = false;

  constructor(private modalController: ModalController,
    private http: HttpClient) {

  }

  ngOnInit() {
    this.findAllPets();
  }

  private findAllPets = () => {
    this.loadingTracker = true;
    return this.http.get<Pageable>('page').subscribe(
      (resp) => this.pets = resp.content,
      (error) => console.log(error),
      () => this.loadingTracker = false
    );
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalMedicamentoComponent,
    });
    return await modal.present();
  }

}
