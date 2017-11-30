export class BusRouteModel {
    name: string;
    refPoints: BusRefPoint[];

    constructor (name: string, refPoints: BusRefPoint[]) {
        this.name = name; this.refPoints = refPoints;
    }
}

export class BusRefPoint {
    name: string;
    ref: string;
    lat: number;
    long: number;

    constructor (ref: any) {
        this.name = ref.name; this.ref = ref.ref;
        this.lat = Number(ref.lat); this.long = Number(ref.long);
    }
}
