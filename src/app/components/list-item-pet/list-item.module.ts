import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListItemComponent } from './list-item.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ListItemComponent]
})
export class ListItemComponentModule {

  constructor() {
  }
}
