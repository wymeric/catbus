import {Component, Input} from '@angular/core';
import {BusRoutes} from '../../busroute/busroutes';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { BusRefPoint } from '../../busroute/busroute.model';

@Component({
    selector: 'routemap',
    templateUrl: 'routemap.html',
    styleUrls: ['routemap.css']
})

export class RouteMapComponent implements OnInit {
    @Input() refPoints: BusRefPoint[];

    ngOnInit(): void {
        console.log(this.refPoints);
    }

}
