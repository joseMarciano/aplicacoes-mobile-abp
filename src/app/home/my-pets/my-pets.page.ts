import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPetComponent } from './modal-pet/modal-pet.component';

interface Pageable {
  offset: number;
  limit: number;
  total: number;
  content: any[];
}
@Component({
  selector: 'app-my-pets',
  templateUrl: 'my-pets.page.html',
  styleUrls: ['my-pets.page.scss', '../commom-style.page.scss'],
})
export class MyPets implements OnInit {

  public pets = [];
  public loadingTracker = false;

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
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
      component: ModalPetComponent,
      componentProps: {
        pet
      }
    });
    
    modal.onWillDismiss().then(this.findAllPets);

    return modal.present();
  }


}
