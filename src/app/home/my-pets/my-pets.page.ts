import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-pets',
  templateUrl: 'my-pets.page.html',
  styleUrls: ['my-pets.page.scss','../commom-style.page.scss'],
})
export class MyPets {

  constructor(private router:Router) {}


}
