import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Medicamentos } from './medicamentos.page';
import { CardListItemComponentModule } from 'src/app/components/card-list-item-pet/card-list-item.module';
import { ModalMedicamentoModule } from './modal-medicamento/modal-medicamento.module';

// import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardListItemComponentModule,
    ModalMedicamentoModule,
    RouterModule.forChild([
      {
        path: '',
        component: Medicamentos   
      }
    ])
  ],
  declarations: [Medicamentos]
})
export class MedicamentosModule { }
