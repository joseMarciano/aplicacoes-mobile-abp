import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ModalMedicamentoComponent } from './modal-medicamento.component';
import { SpinnerComponentModule } from 'src/app/components/spinner/spinner.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpinnerComponentModule
  ],
  declarations: [ModalMedicamentoComponent]
})
export class ModalMedicamentoModule { }
