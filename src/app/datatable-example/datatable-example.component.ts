import { Component, OnInit } from '@angular/core';
import { DatatableExampleService } from './datatable-example.service';

// @TODO: Importar DataTable de PrimeNG. Inyectar datos de JSON.

import {DataTableModule,SharedModule} from 'primeng/primeng';


@Component({
  selector: 'app-datatable-example',
  providers: [ DatatableExampleService ],
  templateUrl: './datatable-example.component.html',
  styleUrls: ['./datatable-example.component.css']
})
export class DatatableExampleComponent implements OnInit {

  private aDataPosts = [];

  constructor(private oDataService:DatatableExampleService) { }

  ngOnInit() {

    // Cogemos los datos del servicio y los ponemos como filas del DataTable
    var oRequestObservable = this.oDataService.getPostsData().subscribe(res => { 
      this.aDataPosts = res.json() 
    });
    
  }

}
