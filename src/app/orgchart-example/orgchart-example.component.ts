import { Component, OnInit } from '@angular/core';
import { OrganizationChartModule,TreeNode } from 'primeng/primeng';
import { OrgchartExampleService } from './orgchart-example.service';

@Component({
  selector: 'app-orgchart-example',
  templateUrl: './orgchart-example.component.html',
  providers: [ OrgchartExampleService ],
  styleUrls: ['./orgchart-example.component.css']
})
export class OrgchartExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Cargar datos del servicio

    // Inicializar arbol de nodos

    // Render

    // Done
  }

}
