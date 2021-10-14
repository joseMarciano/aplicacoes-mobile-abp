import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  styleUrls: ['list-item.component.scss'],
  templateUrl: 'list-item.component.html'

})
export class ListItemComponent {


  @Input()
  public teste: string;

  constructor() {
  }

}
