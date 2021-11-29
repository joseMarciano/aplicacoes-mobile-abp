import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public appPages = [
    { title: 'Meus pets', url: '/home/my-pets', icon: 'list-sharp' },
    { title: 'Cadastrar pet', url: '/home/cadastrar', icon: 'paw-sharp' },
    { title: 'Vacinas', url: '/home/vacinas', icon: 'bandage-sharp' }
  ];


  constructor(private router:Router) {}

  navigate(){
    this.router.navigate(['login']);
  }
}
