import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Cadastrar } from './cadastrar.page';
import { PetFormComponent } from 'src/app/components/pet-form/pet-form.component';

// import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: Cadastrar   
      }
    ])
  ],
  declarations: [
    Cadastrar,
    PetFormComponent
  ]
})
export class CadastrarModule { }
