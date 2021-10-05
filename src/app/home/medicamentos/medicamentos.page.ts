import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamentos',
  templateUrl: 'medicamentos.page.html',
  styleUrls: ['medicamentos.page.scss','../commom-style.page.scss'],
})
export class Medicamentos {

  constructor(private router:Router) {

  }


}
