import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaekwondoComponent } from './taekwondo.component';


const routes: Routes = [
    {
        path:"",
        component: TaekwondoComponent,
        pathMatch:'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaekwondoRoutingModule { }