import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  styleUrls: ['spinner.component.scss'],
  template: `
            <div class="spinner">
              <ion-spinner name="dots" color="light"></ion-spinner>
            </div>
            `

})
export class SpinnerComponent {

  // @Input()
  // ngIf: boolean;


  constructor() {
  }

}
