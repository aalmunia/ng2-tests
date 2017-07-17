import { ViewChild, Component, OnInit } from '@angular/core';
import { DatatableExampleService } from './datatable-example.service';
import { 
  DataTable, 
  DataTableModule, 
  SharedModule, 
  GrowlModule, 
  Message,
  ContextMenuModule,
  MenuItem,
  BlockUIModule } from 'primeng/primeng';

@Component({
  selector: 'app-datatable-example',
  providers: [DatatableExampleService],
  templateUrl: './datatable-example.component.html',
  styleUrls: ['./datatable-example.component.css']
})
export class DatatableExampleComponent implements OnInit {

  /**
   * Tenemos que usar esta sintaxis para poder referenciar el componente DataTable desde
   * código de TypeScript. Si no, solo podremos hacer lo que hayamos especificado en 
   * el pseudoHTML de Angular.
   */
  @ViewChild('dt') dt: DataTable;

  /**
   * Este es el array de filas de la DataTable
   */
  private aDataRows = [];
  private blockedDataTable: boolean = false;

  /**
   * Esta estructura representa las opciones del menú contextual de la DataTable
   * Sus campos son: label (el texto que tiene que aparecer), icon (el icono que acompaña a la opcion)
   * y command, que es una función flecha, que indica qué tenemos que hacer cuando se seleccione
   * esa opción de menú. El parámetro 'event' representa el evento de pulsación sobre
   * la opción de menú.
   */
  private aContextualMenuItems: MenuItem[] = [
    { label: 'Mostrar detalle en consola', icon: 'fa-plus', command: (event) => { 
      console.log('Opcion 1 pulsada') 
    }},
    { label: 'Mostrar detalle en Growl', icon: 'fa-mail-reply', command: (event) => { 
      this.showDetailInGrowl(this.dt.selection);      
    }},
    { label: 'Opcion 3', icon: 'fa-mail-forward', command: (event) => {
      console.log('Opcion 3 pulsada') 
    }}
  ];

  /**
   * Este array es la colección de mensajes que queremos mostrar en el control Growl de notificaciones
   */
  aGrowlMessages: Message[] = [];

  /**
   * Constructor de la clase. No hacemos nada en el, de momento
   * @param oDataService El servicio de obtención de datos mock
   */
  constructor(private oDataService: DatatableExampleService) { }

  /**
   * Al terminar de cargar el componente, nos traemos los datos de jsonplaceholder
   * para ponerlos en el DataTable.
   */
  ngOnInit() {
    this.blockedDataTable = true;
    var oRequestObservable = this.oDataService.getPosts().subscribe(res => {
      this.aDataRows = res.json();
      this.blockedDataTable = false;
    });

    /**
     * Esto es un manejador del evento 'onEditComplete' del DataTable. La idea es
     * que cuando este evento se produzca, se realice lo que sea que hayamos definido.
     * En este caso concreto, vamos a mostrar una notificación de OK, indicando
     * lo que hemos cambiado en la columna.
     * @TODO: Implementar componente Growl
     */
    this.dt.onEditComplete.subscribe(oColumn => {
      this.aGrowlMessages = [];     // De momento no se ocultan automáticamente, esto funciona
      this.aGrowlMessages.push({
        severity: 'info',
        summary: 'Edicion OK',
        detail: 'El campo ' + oColumn.column.field + ' ha sido cambiado, con el nuevo valor ' + oColumn.data[oColumn.column.field]
      });
    });


    /**
     * Esto es un manejador para el evento 'onSort' del DataTable. De la misma forma que antes,
     * mostramos un Growl con el mensaje
     */
    this.dt.onSort.subscribe(oSort => {
      this.blockedDataTable = true;
      var sMessage = 'La DataTable ha sido ordenada, usando el campo ' + oSort.field + ' con ordenación ';
      if(oSort.order === 1) { sMessage += ' ascendente'; } else { sMessage += ' descendente'; }
      this.aGrowlMessages = [];
      this.aGrowlMessages.push({
        severity: 'info',
        summary: 'Sort OK',
        detail: sMessage
      });
      this.blockedDataTable = false;
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
    this.blockedDataTable = true;
    for (var i = 0; i < aNewFields.length; i++) {
      this.dt.columns[i].field = aNewFields[i].fieldName;
      this.dt.columns[i].header = aNewFields[i].headerCaption;
    }
    this.blockedDataTable = false;
  }

  /**
   * Este método se usa para agregar nuevas columnas a la DataTable.
   * @param aNewColumns Array de columnas nuevas
   */
  addDataTableColumns(aNewColumns) {
    this.blockedDataTable = true;
    for(var i = 0; i < aNewColumns.length; i++) {
      this.dt.columns.push(aNewColumns[i]);
    }
    this.blockedDataTable = false;
  }

  /**
   * Este método se usa para quitar columnas de la tabla. Se puede implementar de muchas
   * formas diferentes, esta es muy simple, y se puede llegar a complicar bastante.
   * @param iStart En qué posición del array comenzamos a quitar columnas (0,1,2, ....)
   * @param iHowMany Cuantas columnas quitamos
   * @TODO: Se deberia poder hacer por nombre de campo que representa la columna. Lo haremos
   * mas adelante.
   */
  removeDataTableColumns(iStart, iHowMany) {
    this.blockedDataTable = true;
    this.dt.columns.splice(iStart, iHowMany);
    this.blockedDataTable = false;
  }

  /**
   * Este método sirve para mostrar el detalle de la fila en el Growl
   * @param oRow La fila cuyos datos queremos mostrar en el Growl
   */
  showDetailInGrowl(oRow) {
    this.aGrowlMessages = [];
    this.aGrowlMessages.push({
      severity: 'info', 
      summary: 'Detalle fila',
      detail: JSON.stringify(oRow)
    });
  }

  /**
   * Este método sirve para cargar los datos de comentarios en la DataTable. Es importante
   * que usemos el método addDataTableColumns(), porque si intentamos hacer esto:
   * this.xt.columns.push({ field: 'campo', header: 'loquesea' })
   * da un error, porque se da cuenta de que el tipo de dato estáticamente definido no concuerda
   * con un tipo Column, que es lo que espera recibir.
   * @TODO: Quizás tengamos que implementar la instanciación de nuevas columnas
   * @TODO: Lo mas óptimo sería que no hiciese falta definir las columnas, que las coja
   * directamente del JSON de datos de respuesta.
   */
  loadCommentsData() {
    this.blockedDataTable = true;
    this.oDataService.getComments().subscribe(aComments => {
      var aNewCols = [
        { field: 'id', header: 'ID', sortable: true },
        { field: 'postId', header: 'ID POST', sortable: true },
        { field: 'email', header: 'EMAIL', sortable: true },
        { field: 'body', header: 'BODY', sortable: true }
      ]
      this.dt.columns = [];
      this.addDataTableColumns(aNewCols);      
      this.aDataRows = aComments.json();
      this.blockedDataTable = false;
    });
  }

  /**
   * Este método sirve para cargar los datos de la entidad Post en el 
   * DataTable.
   */
  loadPostsData() {
    this.blockedDataTable = true;
    this.oDataService.getPosts().subscribe(aPosts => {
      var aNewCols = [
        { field: 'userId', header: 'ID USUARIO', sortable: true },
        { field: 'title', header: 'TITULO', sortable: true }
      ];
      this.dt.columns = [];
      this.addDataTableColumns(aNewCols);
      this.aDataRows = aPosts.json();
      this.blockedDataTable = false;
    });
  }

  /**
   * Este método sirve para cargar los datos de álbumes en en DataTable. Es muy similar, como
   * ves, a loadCommentsData()
   * @TODO: ¿Refactorizar estos métodos en uno solo?
   */
  loadAlbumsData() {
    this.blockedDataTable = true;
    this.oDataService.getAlbums().subscribe(aAlbums => {      
      var aNewCols = [
        { field: 'id', header: 'ID', sortable: true },
        { field: 'albumId', header: 'ALBUM ID', sortable: true },
        { field: 'title', header: 'TITULO', sortable: true }
      ];
      this.dt.columns = [];
      this.addDataTableColumns(aNewCols);
      this.aDataRows = aAlbums.json();
      this.blockedDataTable = false;
    });
  }

  /**
   * Este método sirve para cargar los datos de Fotos en el DataTable. Es casi idéntico
   * a loadAlbumsData()
   */
  loadPhotosData() {
    this.blockedDataTable = true;
    this.oDataService.getPhotos().subscribe(aPhotos => {
      var aNewCols = [
        { field: 'id', header: 'ID FOTO', sortable: true },
        { field: 'albumId', header: 'ID ALBUM', sortable: true },
        { field: 'url', header: 'URL', sortable: true },
        { field: 'thumbnailUrl', header: 'THUMBNAIL', sortable: true },
        { field: 'title', header: 'TITULO', sortable: true }
      ];
      this.dt.columns = [];
      this.addDataTableColumns(aNewCols);
      this.aDataRows = aPhotos.json();
      this.blockedDataTable = false;
    });
  }

  /**
   * Este método, privado, se usa para analizar la estructura de datos
   * devuelta por una servicio REST que devuelva un array de objetos 
   * @param oStruct La estructura de datos a analizar
   */
  private analyzeDataStructure(oStruct):Array<Object> {
    var oReturn = [];
    var iCols = 0;
    for(var prop in oStruct) {
      oReturn[iCols] = {};
      oReturn[iCols].field = prop;
      oReturn[iCols].header = prop;
      oReturn[iCols].sortable = true;
      iCols++;
    }
    return oReturn;
  }


  /**
   * Este método sirve para cargar un array de objetos en el DataTable, de tal forma que
   * sin necesidad de saber previamente la estructura de datos, solo con saber que es
   * un array de objetos nos sirve para poder renderizarlo en en DataTable
   * @param sURL La URL del servicio REST de la que se obtiene el Array de objetos
   * a pintar en el DataTable
   */
  loadAnyData(sURL) {
    this.blockedDataTable = true;
    this.oDataService.getAny(sURL).subscribe(aRawResult => {
      var aResult = aRawResult.json();
      if(aResult.length > 0) {
        var aColumns = this.analyzeDataStructure(aResult[0]);
        this.dt.columns = [];
        this.addDataTableColumns(aColumns);
        this.aDataRows = aResult;
      } else {
        throw {
          message: 'LA ESTRUCTURA SUMINISTRADA NO ES UN ARRAY DE OBJETOS'
        }
      }
      this.blockedDataTable = false;
    });
  }

  /**
   * Este método hace que las columnas puedan volver a redimensionarse tras 
   * alterar este valor llamando a makeColumnsUnresizable(). Es interesante
   * que si no se especifica esta propiedad en el HTML del DataTable, ya no 
   * se puede cambiar y setear.
   */
  makeColumnsResizable() {
    this.dt.resizableColumns = true;
  }

  /**
   * Este método hace que las columnas no se puedan redimensionar, asignando el 
   * valor de la propiedad del DataTable .resizableColumns
   */
  makeColumnsUnresizable() {
    this.dt.resizableColumns = false;
  }

  /**
   * Este método sirve para que el redimensionamiento de las columnas se 
   * puedan expandir mas allá del tamaño original del DataTable
   */
  makeResizeExpandable() {
    this.dt.columnResizeMode = 'expand';
  }

  /**
   * Este método sirve para que el redimensionamiento de las columnas no
   * altere el ancho total del DataTable
   */
  makeResizeFit() {
    this.dt.columnResizeMode = 'fit';
  }
  
}
