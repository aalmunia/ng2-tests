import { Component, OnInit } from '@angular/core';
import { TreeExampleService } from './tree-example.service';
import { TreeModule,TreeNode } from 'primeng/primeng';

@Component({
  selector: 'app-tree-example',
  providers: [ TreeExampleService ],
  templateUrl: './tree-example.component.html',
  styleUrls: ['./tree-example.component.css']
})
export class TreeExampleComponent implements OnInit {

  private mockTreeData:TreeNode[];

  constructor(private oDataService: TreeExampleService) { }

  ngOnInit() {
    // console.log(this.oDataService.getMockData());
    this.mockTreeData = this.oDataService.getMockData();
  }

}
