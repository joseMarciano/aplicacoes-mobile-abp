import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Vacinas } from './vacinas.page';
import { CardListItemComponentModule } from 'src/app/components/card-list-item-pet/card-list-item.module';
import { SpinnerComponentModule } from 'src/app/components/spinner/spinner.module';
import { ModalVacinaModule } from './modal-vacina/modal-vacina.module';
import { ModalVacinaNewModule } from './modal-vacina/modal-vacina-new/modal-vacina-new.module';

// import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardListItemComponentModule,
    ModalVacinaModule,
    ModalVacinaNewModule,
    SpinnerComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: Vacinas   
      }
    ])
  ],
  declarations: [Vacinas]
})
export class VacinasModule { }
