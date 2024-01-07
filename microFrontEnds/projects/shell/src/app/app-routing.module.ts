import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"football",
    loadChildren:() => import('football/Module').then(m=>m.PlayerModule)
  },
  {
    path:"martial-arts",
    loadChildren:() => import('martialArts/Module').then(m=>m.TaekwondoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
