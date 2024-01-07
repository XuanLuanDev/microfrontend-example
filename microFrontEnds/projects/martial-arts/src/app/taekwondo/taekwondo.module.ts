import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaekwondoRoutingModule } from './taekwondo-routing.module';
import { TaekwondoComponent } from './taekwondo.component';



@NgModule({
  declarations: [
    TaekwondoComponent
  ],
  imports: [
    CommonModule,
    TaekwondoRoutingModule
  ],
  exports:[
    TaekwondoComponent
  ]
})
export class TaekwondoModule { }
