import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ModalVacinaComponent } from './modal-vacina.component';
import { SpinnerComponentModule } from 'src/app/components/spinner/spinner.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpinnerComponentModule
  ],
  declarations: [ModalVacinaComponent]
})
export class ModalVacinaModule { }
