import {Component, Output, EventEmitter} from '@angular/core';
import { BusRefPoint, BusRouteModel } from '../../busroute/busroute.model';
import { BusRoutes } from '../../busroute/busroutes';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'route-panel',
    templateUrl: 'routepanel.html',
    styleUrls: ['routepanel.css']
})

export class RoutePanelComponent implements OnInit{
    @Output() refPoints = new EventEmitter<BusRefPoint[]>();
    busRoutes: BusRoutes[] = new Array<BusRoutes>();

    ngOnInit(): void {
        this.populate();
    }

    sendRefPoints(br: BusRoutes, outbound: boolean) {
        if (outbound) {
            this.refPoints.emit(br.routeOut.refPoints);
        } else {
            this.refPoints.emit(br.routeIn.refPoints);
        }
    }

    private populate() {
        let busRoutes = new BusRoutes();
        let refsOut = new Array<BusRefPoint>();
        refsOut.push(new BusRefPoint('Kuching Sentral', 1.482120, 110.333164));
        refsOut.push(new BusRefPoint('Jln Dtk Amar Kalong Ningkan', 1.509733, 110.333876));
        refsOut.push(new BusRefPoint('Jln Batu Kawa', 1.516601, 110.322282));
        refsOut.push(new BusRefPoint('MJC', 1.512038, 110.308599));
        refsOut.push(new BusRefPoint('Psn Bdr Baru Batu Kawah 2', 1.513128, 110.304386));
        refsOut.push(new BusRefPoint('Psn Bdr Baru Batu Kawah 3c', 1.515793, 110.311332));
        refsOut.push(new BusRefPoint('Jln Batu Kawa - Matang', 1.506415, 110.252353));
        refsOut.push(new BusRefPoint('Jln Belatok', 1.554552, 110.254480));
        refsOut.push(new BusRefPoint('Tmn Malihah', 1.554092, 110.244745));
        refsOut.push(new BusRefPoint('Jln Matang', 1.582306, 110.234935));
        refsOut.push(new BusRefPoint('Jln Gunung Serapi', 1.614898, 110.219452));
        refsOut.push(new BusRefPoint('Politeknik Kuching', 1.629478, 110.195624));
        refsOut.push(new BusRefPoint('SMKA Matang', 1.635283, 110.194675));
        busRoutes.routeOut = new BusRouteModel('T101', refsOut);
        let refsIn = new Array<BusRefPoint>();
        for (let ref of refsOut) {
            refsIn.push(ref);
        }
        refsIn.reverse();
        refsIn[refsIn.length - 2] = new BusRefPoint('Jln Datuk Tawi Sli', 1.512282, 110.335678);
        busRoutes.routeIn = new BusRouteModel('T101', refsIn);
        this.busRoutes.push(busRoutes);

        busRoutes = new BusRoutes();
        refsOut = new Array<BusRefPoint>();
        refsOut.push(new BusRefPoint('Kubah Ria / Metro City', 1.569266, 110.307848));
        refsOut.push(new BusRefPoint('Jln Matang Jaya', 1.574656, 110.298108));
        refsOut.push(new BusRefPoint('Jln Batu Kawa - Matang', 1.567418, 110.258072));
        refsOut.push(new BusRefPoint('Jln Belatok', 1.554552, 110.254480));
        refsOut.push(new BusRefPoint('Tmn Malihah', 1.554092, 110.244745));
        busRoutes.routeOut = new BusRouteModel('T102A', refsOut);
        refsIn = new Array<BusRefPoint>();
        for (let ref of refsOut) {
            refsIn.push(ref);
        }
        refsIn.reverse();
        busRoutes.routeIn = new BusRouteModel('T102A', refsIn);
        this.busRoutes.push(busRoutes);

        busRoutes = new BusRoutes();
        refsOut = new Array<BusRefPoint>();
        refsOut.push(new BusRefPoint('Kubah Ria / Metro City', 1.569266, 110.307848));
        refsOut.push(new BusRefPoint('Jln Matang Jaya', 1.574656, 110.298108));
        refsOut.push(new BusRefPoint('Jln Batu Kawa - Matang', 1.567418, 110.258072));
        refsOut.push(new BusRefPoint('Jln Belatok', 1.554552, 110.254480));
        refsOut.push(new BusRefPoint('Tmn Malihah', 1.554092, 110.244745));
        refsOut.push(new BusRefPoint('Jln Sejijak', 1.539875, 110.282973));
        busRoutes.routeOut = new BusRouteModel('T102B', refsOut);
        refsIn = new Array<BusRefPoint>();
        for (let ref of refsOut) {
            refsIn.push(ref);
        }
        refsIn.reverse();
        busRoutes.routeIn = new BusRouteModel('T102B', refsIn);
        this.busRoutes.push(busRoutes);
    }
}
