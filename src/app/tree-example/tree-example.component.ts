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
  private mockTreeData2: TreeNode[];
  private mockTreeData3: TreeNode[];
  private treeSelectedNode: TreeNode;
  private treeSelectedNodes2: TreeNode[];
  private treeSelectedNodes3: TreeNode[];
  private nodeSelected = '';

  constructor(private oDataService: TreeExampleService) { }

  ngOnInit() {
    this.mockTreeData = this.oDataService.getMockData();
    this.mockTreeData2 = this.oDataService.getMockData();
    this.mockTreeData3 = this.oDataService.getMockData();   
  }

  showSelectedNode(oEvent) {
    // this.nodeSelected = JSON.stringify(this.treeSelectedNode);
    this.nodeSelected =  "NODO SELECCIONADO: \n";
    this.nodeSelected += "LABEL: " + this.treeSelectedNode.label + "\n";
    this.nodeSelected += "DATA: " + this.treeSelectedNode.data;    
  }

  showSelectedNodes(oEvent) {
    console.log(this.treeSelectedNodes2);
  }

  showSelectedNodesMultiple(oEvent) {
    console.log(this.treeSelectedNodes3);
  }

}
