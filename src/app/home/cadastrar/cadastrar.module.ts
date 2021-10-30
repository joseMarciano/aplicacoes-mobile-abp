import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Cadastrar } from './cadastrar.page';
import { PetFormComponent } from 'src/app/components/pet-form/pet-form.component';
import { SpinnerComponentModule } from 'src/app/components/spinner/spinner.module';

// import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SpinnerComponentModule,
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
