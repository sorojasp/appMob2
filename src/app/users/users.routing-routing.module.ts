import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component'

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path: 'prestamos',
    loadChildren: () => import('./prestamos/prestamos.module').then( m => m.PrestamosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
