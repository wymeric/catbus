import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatIconModule, MatButtonModule} from '@angular/material';
import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';

import * as comps from './components';


@NgModule({
  declarations: [
    AppComponent,
    comps.RouteMapComponent, comps.RoutePanelComponent,
    comps.DirectionsMapDirective
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule,
    MatToolbarModule, MatIconModule, MatButtonModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCjqneQGeHgHMfWZU_BZNuz6eggwATDut0'})
  ],
  exports: [comps.DirectionsMapDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
