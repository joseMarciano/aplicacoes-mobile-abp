import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';
import { MyPets } from './my-pets/my-pets.page';

// import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'my-pets',
        pathMatch: 'full'
      },
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: 'my-pets',
            loadChildren: () => import('./my-pets/my-pets.module').then(m => m.MyPetsModule),
            pathMatch: 'full'
          },
          {
            path: 'cadastrar',
            loadChildren: () => import('./cadastrar/cadastrar.module').then(m => m.CadastrarModule),
            pathMatch: 'full'
          },
          {
            path: 'vacinas',
            loadChildren: () => import('./vacinas/vacinas.module').then(m => m.VacinasModule),
            pathMatch: 'full'
          },
          {
            path: 'medicamentos',
            loadChildren: () => import('./medicamentos/medicamentos.module').then(m => m.MedicamentosModule),
            pathMatch: 'full'
          },
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
