import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalPetComponent } from './modal-pet.component';
import { PetFormComponent } from 'src/app/components/pet-form/pet-form.component';
import { SpinnerComponentModule } from 'src/app/components/spinner/spinner.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SpinnerComponentModule
  ],
  declarations: [ModalPetComponent, PetFormComponent]
})
export class ModalPetModule { }
