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

  addBounceMarker() {
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


  addDropMarker() {
    this.overlaysGoogleMap.push(
      new google.maps.Marker(
        {
          position: { lat: 40.4665899, lng: -3.6413987 },
          title: "Carretera de Canillas, 115",
          animation: google.maps.Animation.DROP
        }
      )
    );
  }


  removeLastMarker() {
    if(this.overlaysGoogleMap.length > 0) {
      this.overlaysGoogleMap.splice( (this.overlaysGoogleMap.length) - 1, 1 );
    }
  }


  removeAllMarkers() {
    this.overlaysGoogleMap = [];
  }


  addInfoWindow() {
    this.overlaysGoogleMap.push(
      new google.maps.InfoWindow(
        {
          position: { lat: 40.4665899, lng: -3.6413987 },
          content: "Esto es el texto de la ventana de informacion"
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
