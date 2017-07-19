import { ViewChild, Component, OnInit, TemplateRef } from '@angular/core';
import { GMap, GMapModule } from "primeng/primeng";
import { googlemaps } from 'googlemaps';

@Component({
  selector: 'app-gmap-example',
  templateUrl: './gmap-example.component.html',
  styleUrls: ['./gmap-example.component.css']
})
export class GmapExampleComponent implements OnInit {

  optionsGoogleMap: any;
  overlaysGoogleMap: any;

  constructor() { }

  ngOnInit() {

    this.optionsGoogleMap = {
      center: { lat: 40.4665899, lng: -3.6413987 },
      zoom: 13
    };
    this.overlaysGoogleMap = [];
  }

  addMarker() {
    this.overlaysGoogleMap.push(
      new google.maps.Marker(
        {
          position: {lat: 40.4758712, lng: -3.6408071}, 
          title:"Calle Repelon",
          animation: google.maps.Animation.BOUNCE
        }
      )
    );
  }


  handleMapClick(event) {
    var sLat = event.latLng.lat();
    var sLng = event.latLng.lng();

    this.overlaysGoogleMap.push(
      new google.maps.Marker({ 
        position: { lat: sLat, lng: sLng },
        title: "Has pulsado en este punto, te agrego un marcador",
        animation: google.maps.Animation.DROP
      })
    );

  }

  handleOverlayClick(event) {
    // console.log(event);
  }

}
