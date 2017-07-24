import { ViewChild, Component, OnInit, TemplateRef } from '@angular/core';
import { GMap, GMapModule } from "primeng/primeng";
import { googlemaps } from 'googlemaps';

@Component({
  selector: 'app-gmap-example',
  templateUrl: './gmap-example.component.html',
  styleUrls: ['./gmap-example.component.css']
})

/**
 * Esta es la clase que hace de componente de ejemplo del control <p-gmap> de 
 * PrimeNG.
 */
export class GmapExampleComponent implements OnInit {

  /**
   * Estructura de datos que define como es el mapa de Google en 
   * el momento de su creación.
   */
  optionsGoogleMap: any;

  /**
   * Estructura que define los diferentes elementos (marcadores, textos, etc...)
   * que pueden aparecer en el mapa de Google.
   */
  overlaysGoogleMap: any;

  constructor() { }

  /**
   * Inicializamos el mapa de Google, centrańdolo en Madrid.
   */
  ngOnInit() {

    this.optionsGoogleMap = {
      center: { lat: 40.4665899, lng: -3.6413987 },
      zoom: 13
    };
    this.overlaysGoogleMap = [];
  }

  /**
   * Este método agrega un marcador con animación bounce (botando),
   * en la posición de mi casa.
   */
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


  /**
   * Este método agrega un marcador con animación drop (cayendo), 
   * en la posición de la casa de mi abuela.
   */
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

  /**
   * Este método quita el último overlay agregado al mapa
   */
  removeLastMarker() {
    if(this.overlaysGoogleMap.length > 0) {
      this.overlaysGoogleMap.splice( (this.overlaysGoogleMap.length) - 1, 1 );
    }
  }


  /**
   * Este método quita todos los overlays del mapa
   */
  removeAllMarkers() {
    this.overlaysGoogleMap = [];
  }

  /**
   * Este método agrega un diálogo de información al mapa
   */
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


  /**
   * Este método gestiona un click del ratón encima del mapa, agregando
   * un marcador en ese punto.
   * @param event El evento producido al hacer click
   */
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

  /**
   * Este método gestiona un click de ratón encima de un overlay del mapa
   * @param event El evento producido al hacer click
   */  
  handleOverlayClick(event) {
    // console.log(event);
  }

}
