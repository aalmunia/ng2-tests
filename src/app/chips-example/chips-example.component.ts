import { ViewChild, TemplateRef, Component, OnInit } from '@angular/core';
import { ChipsModule } from 'primeng/primeng';

@Component({
  selector: 'app-chips-example',
  templateUrl: './chips-example.component.html',
  styleUrls: ['./chips-example.component.css']
})
export class ChipsExampleComponent implements OnInit {

  private valuesFirstChipsControl: string[];
  private valuesSecondChipsControl: string[];

  constructor() { 
    this.valuesSecondChipsControl = ['Alejandro', 'Guiomar', 'Eloy', 'Irene', 'Ramón', 'David', 'Pilar'];
  }

  ngOnInit() {    
  }

  hndlFirstChipsAdd(oEvent, sValue) {
    console.log('Valor agregado: ' + sValue);
    console.log('Valores del control: ');
    console.log(this.valuesFirstChipsControl);
  }

  hndlFirstChipsRemove(oEvent,sValue) {
    console.log('Valor quitado: ' + sValue);
    console.log('Valores del control: ');
    console.log(this.valuesFirstChipsControl);
  }

}
