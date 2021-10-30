import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss'],
})
export class PetFormComponent implements OnInit {

  @Input()
  public pet = null;

  @Input()
  public showDeleteButton = false;

  @Input()
  public closeModal: () => void;

  public loadingTracker = false;

  public form = new FormGroup({});

  private currentTypeAnimal;
  private currentTypeSex;
  private currentTypeCastrado;


  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.currentTypeCastrado = this.pet?.castrated === false ? 'false' : 'true';
    this.currentTypeAnimal = this.pet?.type || 'dog';
    this.currentTypeSex = this.pet?.sex || 'male';

    this.addClassSelected(`#radio-${this.currentTypeAnimal}`);
    this.addClassSelected(`#radio-sex-${this.currentTypeSex}`);
    this.addClassSelected(`#radio-castrado-${this.currentTypeCastrado}`);

    this.form = new FormGroup({
      type: new FormControl(this.pet?.type || 'dog'),
      sex: new FormControl(this.pet?.sex || 'male'),
      castrated: new FormControl(this.pet?.castrated === false ? 'false' : 'true'),
      name: new FormControl(this.pet?.name || ''),
      breed: new FormControl(this.pet?.breed || ''),
      vaccines: new FormControl(this.pet?.vaccinas || []),
      medicaments: new FormControl(this.pet?.medicaments || [])
    });

  }

  public save() {
    this.loadingTracker = true;
    let observable: Observable<any>;

    const body = { ...this.form.value, castrated: this.form.value?.castrated === 'true' };

    observable = this.pet?._id
      ? this.http.put(`edit/${this.pet._id}`, body)
      : this.http.post('create', body);

    observable.subscribe(
      (res) => {
        if (!!this.closeModal) return this.closeModal();

        this.router.navigate(['home','my-pets']);

      },
      (error) => console.log(error),
      () => this.loadingTracker = false
    );
  }

  public remove() {
    this.loadingTracker = true;

    this.http.delete(`delete-by-id/${this.pet._id}`).subscribe(
      (res) => {
        if (!!this.closeModal) this.closeModal();
      },
      (error) => console.log(error),
      () => this.loadingTracker = false
    );
  }

  private addClassSelected = (id: string) => document.querySelector(id).classList.add('selected');

  public changeTypeAnimal(event) {
    event.currentTarget.querySelector(`#radio-${this.currentTypeAnimal}`).classList.remove('selected');
    event.currentTarget.querySelector(`#radio-${event.detail?.value}`).classList.add('selected');
    this.currentTypeAnimal = event.detail?.value;
  }

  public changeTypeSex(event) {
    event.currentTarget.querySelector(`#radio-sex-${this.currentTypeSex}`).classList.remove('selected');
    event.currentTarget.querySelector(`#radio-sex-${event.detail?.value}`).classList.add('selected');
    this.currentTypeSex = event.detail?.value;
  }

  public changeTypeCastrado(event) {
    event.currentTarget.querySelector(`#radio-castrado-${this.currentTypeCastrado}`).classList.remove('selected');
    event.currentTarget.querySelector(`#radio-castrado-${event.detail?.value}`).classList.add('selected');
    this.currentTypeCastrado = event.detail?.value;
  }

}
