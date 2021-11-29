import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalVacinaNewComponent } from './modal-vacina-new.component';
import { SpinnerComponentModule } from 'src/app/components/spinner/spinner.module';
import { DatePicker } from '@ionic-native/date-picker/ngx';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SpinnerComponentModule
  ],
  providers:[
    DatePicker
  ],
  declarations: [ModalVacinaNewComponent]
})
export class ModalVacinaNewModule { }
