import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [SpinnerComponent]
})
export class SpinnerComponentModule {

  constructor(){
  }
}
