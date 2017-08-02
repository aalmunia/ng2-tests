import { Component, OnInit } from '@angular/core';
import { TreeExampleService } from './tree-example.service';
import { TreeModule,TreeNode } from 'primeng/primeng';
import { ContextMenuModule,MenuItem } from 'primeng/primeng';

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
  private dataTreeContextMenu: TreeNode[];
  private treeContextualSelectedNodes: TreeNode[];
  private nodeSelected = '';
  private strNodesSelectedTree2 = '';
  private strNodesSelectedTree3 = '';

  private itemsContextMenu: MenuItem[];

  private testFunc() {
    console.log(this);
  }

  constructor(private oDataService: TreeExampleService) { }

  ngOnInit() {
    this.oDataService.assignParentComponent(this);
    this.mockTreeData = this.oDataService.getMockData();
    this.mockTreeData2 = this.oDataService.getMockData();
    this.mockTreeData3 = this.oDataService.getMockData();
    this.dataTreeContextMenu = this.oDataService.getMockData();
    this.itemsContextMenu = this.oDataService.getContextualMenuData();    
  }

  renderNode(oNode) {
    var sReturn  =  "NODO SELECCIONADO: \n";
    sReturn += "LABEL: " + oNode.label + "\n";
    sReturn += "DATA: " + oNode.data;
    return sReturn;
  }

  showSelectedNode(oEvent) {
    this.nodeSelected = this.renderNode(this.treeSelectedNode);
  }

  showSelectedNodes(oEvent) {
    this.strNodesSelectedTree2 = '';
    for(var i = 0; i < this.treeSelectedNodes2.length; i++) {
      this.strNodesSelectedTree2 += this.renderNode(this.treeSelectedNodes2[i]);
      this.strNodesSelectedTree2 += "\n";
    }
  }

  showSelectedNodesMultiple(oEvent) {
    this.strNodesSelectedTree3 = '';
    for(var i = 0; i < this.treeSelectedNodes3.length; i++) {
      this.strNodesSelectedTree3 += this.renderNode(this.treeSelectedNodes3[i]);
      this.strNodesSelectedTree3 += "\n";
    }
  }
}
