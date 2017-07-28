import { Component, OnInit } from '@angular/core';
import { OrganizationChartModule, TreeNode } from 'primeng/primeng';
import { OrgchartExampleService } from './orgchart-example.service';

@Component({
  selector: 'app-orgchart-example',
  templateUrl: './orgchart-example.component.html',
  providers: [OrgchartExampleService],
  styleUrls: ['./orgchart-example.component.css']
})
export class OrgchartExampleComponent implements OnInit {

  constructor() { }

  data: TreeNode[];

  ngOnInit() {

    this.data = [{
      label: 'Root',
      children: [
        {
          label: 'Child 1',
          children: [
            {
              label: 'Grandchild 1.1'
            },
            {
              label: 'Grandchild 1.2'
            }
          ]
        },
        {
          label: 'Child 2',
          children: [
            {
              label: 'Child 2.1'
            },
            {
              label: 'Child 2.2'
            }
          ]
        }
      ]
    }];

    // Cargar datos del servicio

    // Inicializar arbol de nodos

    // Render

    // Done
  }

}
