import { ViewChild, Component, OnInit, TemplateRef } from '@angular/core';
import { GMap, GMapModule } from "primeng/primeng";

@Component({
  selector: 'app-gmap-example',
  templateUrl: './gmap-example.component.html',
  styleUrls: ['./gmap-example.component.css']
})
export class GmapExampleComponent implements OnInit {

  optionsGoogleMap: any;

  constructor() { }

  ngOnInit() {

    this.optionsGoogleMap = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };

  }

}
