import { ViewChild, Component, OnInit } from '@angular/core';
import { DatatableExampleService } from './datatable-example.service';
import { DataTable, DataTableModule, SharedModule, GrowlModule, Message } from 'primeng/primeng';

@Component({
  selector: 'app-datatable-example',
  providers: [DatatableExampleService],
  templateUrl: './datatable-example.component.html',
  styleUrls: ['./datatable-example.component.css']
})
export class DatatableExampleComponent implements OnInit {

  @ViewChild('dt') dt: DataTable;

  private aDataRows = [];
  aGrowlMessages: Message[] = [];

  constructor(private oDataService: DatatableExampleService) { }

  /**
   * Al terminar de cargar el componente, nos traemos los datos de jsonplaceholder
   * para ponerlos en el DataTable.
   */
  ngOnInit() {
    var oRequestObservable = this.oDataService.getPosts().subscribe(res => {
      this.aDataRows = res.json();
    });

    /**
     * Esto es un manejador del evento 'onEditComplete' del DataTable. La idea es
     * que cuando este evento se produzca, se realice lo que sea que hayamos definido.
     * En este caso concreto, vamos a mostrar una notificación de OK, indicando
     * lo que hemos cambiado en la columna.
     * @TODO: Implementar componente Growl
     */
    this.dt.onEditComplete.subscribe(oColumn => {
      // console.log('El campo ' + oColumn.column.field + ' ha sido cambiado, con el nuevo valor ' + oColumn.data[oColumn.column.field]);
      this.aGrowlMessages = [];     // De momento no se ocultan automáticamente, esto funciona
      this.aGrowlMessages.push({
        severity: 'info',
        summary: 'Edicion OK',
        detail: 'El campo ' + oColumn.column.field + ' ha sido cambiado, con el nuevo valor ' + oColumn.data[oColumn.column.field]
      });
    });


    /**
     * Esto es un manejador para el evento 'onSort' del DataTable.
     */
    this.dt.onSort.subscribe(oSort => {      
      var sMessage = 'La DataTable ha sido ordenada, usando el campo ' + oSort.field + ' con ordenación ';
      if(oSort.order === 1) { sMessage += ' ascendente'; } else { sMessage += ' descendente'; }
      this.aGrowlMessages = [];
      this.aGrowlMessages.push({
        severity: 'info',
        summary: 'Sort OK',
        detail: sMessage
      });      
    });

  }

  /**
   * Este método nos sirve para cambiar en tiempo de ejecución las columnas de la tabla.
   * Es útil si, por ejemplo, queremos reutilizar el mismo DataTable para distinas 
   * estructuras de datos, por ejemplo como estamos haciendo con los mocks de 
   * jsonplaceholder
   * @param aNewFields Array de objetos que indican nueva columna
   */
  alterDataTableColumns(aNewFields) {
    for (var i = 0; i < aNewFields.length; i++) {
      this.dt.columns[i].field = aNewFields[i].fieldName;
      this.dt.columns[i].header = aNewFields[i].headerCaption;
    }
  }
}
