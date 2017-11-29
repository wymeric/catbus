import { BusRouteModel, BusRefPoint } from './busroute.model';

export class BusRoutes {
    routeOut: BusRouteModel;
    routeIn: BusRouteModel;

    constructor() {
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
        this.routeOut = new BusRouteModel('T101', refsOut);
        let refsIn = new Array<BusRefPoint>();
        for (let ref of refsOut) {
            refsIn.push(ref);
        }
        refsIn.reverse();
        refsIn[refsIn.length - 2] = new BusRefPoint('Jln Datuk Tawi Sli', 1.512282, 110.335678);
        this.routeIn = new BusRouteModel('T101', refsIn);
    }
}
