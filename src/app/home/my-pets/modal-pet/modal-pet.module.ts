import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ModalPetComponent } from './modal-pet.component';
import { PetFormComponent } from 'src/app/components/pet-form/pet-form.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ModalPetComponent, PetFormComponent]
})
export class ModalPetModule { }
