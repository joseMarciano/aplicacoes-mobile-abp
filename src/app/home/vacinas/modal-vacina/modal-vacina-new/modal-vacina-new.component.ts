import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-vacina-new',
  templateUrl: './modal-vacina-new.component.html',
  styleUrls: ['./modal-vacina-new.component.scss', '../../../commom-style.page.scss'],
})
export class ModalVacinaNewComponent implements OnInit, AfterViewInit {


  @Input()
  public pet = {} as any;

  @Input()
  public editingData = null as any;


  public currentTypeImportant = '';

  public formVacina = new FormGroup({});


  public loadingTracker = false;

  constructor(
    private modalController: ModalController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.formVacina = new FormGroup({
      description: new FormControl(!this.editingData ? '' : this.editingData.vaccine.description),
      dateNext: new FormControl(!this.editingData ? '' : this.editingData.vaccine.dateNext),
      important: new FormControl(!this.editingData ? 'true' : this.editingData.vaccine.important === true ? 'true' : 'false'),
      title: new FormControl(!this.editingData ? '': this.editingData.vaccine.title)
    });
  }

  ngAfterViewInit() {
    this.currentTypeImportant = !this.editingData ? 'true' : this.editingData.vaccine.important === true ? 'true' : 'false';
  
    this.addClassSelected(`#radio-important-${this.currentTypeImportant}`);
  }

  async close() {
    await this.modalController.dismiss();
  }

  private addClassSelected = (id: string) => {
    document.querySelector(id).classList.value = '';
    document.querySelector(id).classList.value = 'selected';
  }

  async save() {
    this.loadingTracker = true;
    let observable: Observable<any>;

    if (!this.editingData) {
      this.pet.vaccines.push({
        title: this.formVacina.value.title,
        description: this.formVacina.value.description,
        dateNext: this.formVacina.value.dateNext,
        important: this.formVacina.value.important === 'true'
      });
    } else {
      this.pet.vaccines[this.editingData.$index] = {
        title: this.formVacina.value.title,
        description: this.formVacina.value.description,
        dateNext: this.formVacina.value.dateNext,
        important: this.formVacina.value.important === 'true'
      }
    }

    observable = this.http.put(`edit/${this.pet._id}`, this.pet)

    observable.subscribe(
      async (res) => {
        this.pet = null;
        await this.modalController.dismiss();
      },
      (error) => console.log(error),
      () => this.loadingTracker = false
    );
  }

   changeTypeImportant(event) {
    event.currentTarget.querySelector(`#radio-important-${this.currentTypeImportant}`).classList.remove('selected');
    event.currentTarget.querySelector(`#radio-important-${event.detail?.value}`).classList.add('selected');
    this.currentTypeImportant = event.detail?.value;
  }

}
