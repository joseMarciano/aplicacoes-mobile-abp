import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ModalVacinaNewComponent } from './modal-vacina-new/modal-vacina-new.component';

@Component({
  selector: 'app-modal-vacina',
  templateUrl: './modal-vacina.component.html',
  styleUrls: ['./modal-vacina.component.scss', '../../commom-style.page.scss'],
})
export class ModalVacinaComponent implements OnInit {


  @Input()
  public pet = {} as any;


  public loadingTracker = false;

  constructor(
    private modalController: ModalController,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  async close() {
    await this.modalController.dismiss();
  }

  async openModal($index, vaccine) {

    let editingData = null;


    if ($index !== null && vaccine){
      editingData = {
        $index,
        vaccine
      }
    }

    const modal = await this.modalController.create({
      component: ModalVacinaNewComponent,
      componentProps: {
        pet: this.pet,
        editingData
      }
    });

    // modal.onWillDismiss().then(this.findAllPets);

    return modal.present();
  }

  public formatVaccine(data: string){
    return new Intl.DateTimeFormat('pt-br').format(new Date(data));
  }

  async removeVacina($index, itemSlibind: IonItemSliding) {
    await itemSlibind.closeOpened();
    this.pet.vaccines.splice($index, 1);

    let observable: Observable<any>;

    observable = this.http.put(`edit/${this.pet._id}`, this.pet)

    this.loadingTracker = true;
    observable.subscribe(
      (res) => { },
      (error) => console.log(error),
      () => this.loadingTracker = false
    );
  }
}
