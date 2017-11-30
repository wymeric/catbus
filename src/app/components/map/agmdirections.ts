import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';
import { Directive,  Input} from '@angular/core';
declare var google: any;



@Directive({
  selector: 'agm-directions'
})
export class DirectionsMapDirective {
  @Input() originLat;
  @Input() originLong;
  @Input() destLat;
  @Input() destLong;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  ngOnInit(){
    this.gmapsApi.getNativeMap().then(map => {
              var directionsService = new google.maps.DirectionsService;
              var directionsDisplay = new google.maps.DirectionsRenderer;
              directionsDisplay = new google.maps.DirectionsRenderer;
              directionsDisplay.setMap(map);
              directionsService.route({
                      origin: {lat: this.originLat, lng: this.originLong},
                      destination: {lat: this.destLat, lng: this.destLong},
                      waypoints: [],
                      optimizeWaypoints: true,
                      travelMode: 'DRIVING'
                    }, function(response, status) {
                        directionsDisplay.setDirections(response);
              });

    });
  }
}
