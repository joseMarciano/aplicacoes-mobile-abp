import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyPets } from './my-pets.page';
import { CardListItemComponent } from 'src/app/components/card-list-item-pet/card-list-item.component';
import { PetFormComponent } from 'src/app/components/pet-form/pet-form.component';
import { ModalPetModule } from './modal-pet/modal-pet.module';
import { CardListItemComponentModule } from 'src/app/components/card-list-item-pet/card-list-item.module';
import { SpinnerComponentModule } from 'src/app/components/spinner/spinner.module';

// import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPetModule,
    CardListItemComponentModule,
    SpinnerComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyPets   
      }
    ])
  ],
  declarations: [
    MyPets,
  ]
})
export class MyPetsModule { }
