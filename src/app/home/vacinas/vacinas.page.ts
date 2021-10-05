import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacinas',
  templateUrl: 'vacinas.page.html',
  styleUrls: ['vacinas.page.scss','../commom-style.page.scss'],
})
export class Vacinas {

  constructor(private router:Router) {}


}
