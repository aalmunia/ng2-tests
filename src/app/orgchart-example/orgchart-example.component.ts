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

  constructor(private oDataService: OrgchartExampleService) { }

  private data: TreeNode[];

  ngOnInit() {
    this.data = this.oDataService.getMockData();
    //@todo: En pulsando cada elemento, ir a la web de la propiedad .url
    //del objeto.
  }

}
