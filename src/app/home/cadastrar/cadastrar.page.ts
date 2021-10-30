import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  templateUrl: 'cadastrar.page.html',
  styleUrls: ['cadastrar.page.scss', '../commom-style.page.scss'],
})
export class Cadastrar implements OnInit {


  constructor(private http: HttpClient) {
    
  }


  ngOnInit(): void {
    // this.http.get('list-all').subscribe()
  }

  

}
