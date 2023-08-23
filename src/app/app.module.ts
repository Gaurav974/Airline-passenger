import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerCardComponent } from './shared/components/passenger-card/passenger-card.component';
import { PassengerControlDirective } from './shared/components/directives/passenger-control.directive';

@NgModule({
  declarations: [
    AppComponent,
    PassengerCardComponent,
    PassengerControlDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
