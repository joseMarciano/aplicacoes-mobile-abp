import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  
  loggingTracker = false;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: ['',[Validators.required]],
      password: ['',Validators.required]
    });
  }

  get errorControl(){
    return this.loginForm.controls;
  }

  async login() {
    this.loggingTracker = true;
    setTimeout(() => {
      this.loggingTracker = false;
      this.router.navigate(['home']);

      this.loginForm.value.password = '';
      this.loginForm.value.user = '';
      
    },1500)
  }


  async presentToast(message:string, type = 'success') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: type
    });
    toast.present();
  }

}
