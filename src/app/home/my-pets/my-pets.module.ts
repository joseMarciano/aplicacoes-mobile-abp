import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyPets } from './my-pets.page';
import { ListItemComponent } from 'src/app/components/list-item-pet/list-item.component';
import { PetFormComponent } from 'src/app/components/pet-form/pet-form.component';
import { ModalPetModule } from './modal-pet/modal-pet.module';

// import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPetModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyPets   
      }
    ])
  ],
  declarations: [
    MyPets,
    ListItemComponent
  ]
})
export class MyPetsModule { }
