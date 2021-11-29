import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalVacinaComponent } from './modal-vacina/modal-vacina.component';


interface Pageable {
  offset: number;
  limit: number;
  total: number;
  content: any[];
}
@Component({
  selector: 'app-vacinas',
  templateUrl: 'vacinas.page.html',
  styleUrls: ['vacinas.page.scss', '../commom-style.page.scss'],
})
export class Vacinas {

  public pets = [];
  public loadingTracker = false;


  constructor(private modalController: ModalController,
    private http: HttpClient
  ) { }


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

  async openModal(pet) {
    const modal = await this.modalController.create({
      component: ModalVacinaComponent,
      componentProps: {
        pet
      }
    });
    return await modal.present();
  }

}
