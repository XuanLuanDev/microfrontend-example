import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaekwondoModule } from './taekwondo/taekwondo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaekwondoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
