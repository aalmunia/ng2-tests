import { ViewChild, TemplateRef, Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { DropdownExampleService } from './dropdown-example.service';

@Component({
  selector: 'app-dropdown-example',
  providers: [ DropdownExampleService ],
  templateUrl: './dropdown-example.component.html',
  styleUrls: ['./dropdown-example.component.css']
})
export class DropdownExampleComponent implements OnInit {

  private aCiudades: SelectItem[];
  private sCiudadSeleccionada: string;
  private sCiudadSeleccionadaEditable: string;
  private sCiudadSeleccionadaFiltrado: string;

  constructor(private oDataService: DropdownExampleService) { }

  ngOnInit() {
    this.aCiudades = this.oDataService.getDropDownData();
  }

  //@todo: Con cada puñetera pulsación de tecla se dispara este evento.
  // Lo que queremos es que al agregar una nueva opción y pulsar 'Enter',
  // se ejecute esto y agregue un nuevo valor al dropdown
  hndlChangeEditable(oEvent, sValue) {
    /* console.log(oEvent);
    console.log(sValue); */
    var bHasKey = false;

    //@todo: Usar lodash para esto
    for(var i = 0; i < this.aCiudades.length; i++) {
      if(this.aCiudades[i].value == sValue) {
        bHasKey = true;
        break;
      }
    }

    if(!bHasKey) {
      this.aCiudades.push({
        label: sValue,
        value: sValue
      });
    }
  }

}