import {Component, Output, EventEmitter} from '@angular/core';
import { BusRefPoint, BusRouteModel } from '../../busroute/busroute.model';
import { BusRoutes } from '../../busroute/busroutes';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import {DataService} from '../../services/data.service';
import {Observable, Subscription} from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'route-panel',
    templateUrl: 'routepanel.html',
    styleUrls: ['routepanel.css'],
    providers: [DataService]
})

export class RoutePanelComponent implements OnInit, OnDestroy {
    @Output() refPoints = new EventEmitter<string>();
    busRoutes: BusRoutes[] = new Array<BusRoutes>();
    dataSubscription: Subscription;
    mapTypeOptions = {position: 'BOTTOM_CENTER'};
    constructor (private ds: DataService, private http: Http) {}

    ngOnInit(): void {
        this.populate();
    }

    ngOnDestroy() {
        this.dataSubscription.unsubscribe();
    }

    sendRefPoints(br: BusRoutes, outbound: boolean) {
        let refs: string;
        const brps: BusRefPoint[] = new Array<BusRefPoint>();
        if (outbound) {refs = br.refsOut;
        } else {refs = br.refsIn; }
        this.refPoints.emit(refs);
    }

    private populate() {
        let busRoutes = new BusRoutes({});
        this.dataSubscription = this.ds.getData(`http://swopt.gaharu.co:8080/catbus/routes.php`)
        .subscribe(response => {
            let routes: any = response;
            for (let route of routes) {
                busRoutes = new BusRoutes(route);
                this.busRoutes.push(busRoutes);
            }
        });
    }
}
