import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss'],
})
export class PetFormComponent implements OnInit {


  @Input()
  showDeleteButton = false;

  private currentTypeAnimal = 'dog';
  private currentTypeSex = 'male';


  constructor() { }

  ngOnInit() {}

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

}
