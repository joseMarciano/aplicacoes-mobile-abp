import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardListItemComponent } from './card-list-item.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [CardListItemComponent],
  exports: [CardListItemComponent]
})
export class CardListItemComponentModule {

  constructor() {
  }
}
