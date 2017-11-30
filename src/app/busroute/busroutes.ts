import { BusRouteModel, BusRefPoint } from './busroute.model';

export class BusRoutes {
    name: string;
    refsOut: string;
    refsIn: string;

    constructor(route: any) {
        this.name = route.name;
        this.refsOut = route.refsOut;
        this.refsIn = route.refsIn;
    }
}
