import { Component } from '@angular/core';
import { BusRefPoint } from './busroute/busroute.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  refs: string;
}
