export class BusRouteModel {
    name: string;
    refPoints: BusRefPoint[];

    constructor (name: string, refPoints: BusRefPoint[]) {
        this.name = name; this.refPoints = refPoints;
    }
}

export class BusRefPoint {
    name: string;
    lat: number;
    long: number;

    constructor (name: string, lat: number, long: number) {
        this.name = name; this.lat = lat, this.long = long;
    }
}
