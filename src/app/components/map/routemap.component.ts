import {Component, Input} from '@angular/core';
import {BusRoutes} from '../../busroute/busroutes';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { BusRefPoint } from '../../busroute/busroute.model';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'routemap',
    templateUrl: 'routemap.html',
    styleUrls: ['routemap.css']
})

export class RouteMapComponent implements OnInit {
    _refs: string;
    refPoints: BusRefPoint[];
    mapTypeControlOpt: {position: 3};

    constructor (private http: Http) {}

    @Input()
    set refs(refs: string){
        this._refs = refs;
        this.refPoints = new Array<BusRefPoint>();
        console.log(refs);
        let headers = new Headers();
        this.http.get(`https://angularswopt.appspot.com/catbus/getrefs.php?refs=` + refs, {headers: headers}).toPromise()
        .then (response => {
            for (let ref of response.json().results) {
                this.refPoints.push(new BusRefPoint(ref));
            }
        });
    }

    get refs(){return this._refs; }

    ngOnInit(): void {
        console.log(this.refPoints);
    }

}
