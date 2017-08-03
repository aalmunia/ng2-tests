import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class TreeExampleService {

  private oParentComponent: any;
  public someEvent = new Subject();

  constructor() { }

  assignParentComponent(oParentComponent) {
    this.oParentComponent = oParentComponent;
  }

  randomText() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateChildNodeArray(iChildren) {
    if (iChildren == undefined) { iChildren = 3; }
    var aReturn = [];
    for (var i = 0; i < iChildren; i++) {
      aReturn[i] = {
        label: this.randomText(),
        data: this.randomText(),
        icon: 'fa-file-image-o'
      };
    }

    return aReturn;
  }

  //@todo: Hacer método recursivo
  getMockData() {
    var aReturn = [];
    var iNodes = this.getRandomInt(2, 5);

    for (var i = 0; i < iNodes; i++) {

      var iChildren = this.getRandomInt(4, 7);

      aReturn[i] = {
        label: this.randomText(),
        data: this.randomText(),
        expandedIcon: 'fa-folder-open',
        collapsedIcon: 'fa-folder',        
        children: this.generateChildNodeArray(iChildren)
      };

    }

    return aReturn;
  }


  getContextualMenuData() {
    return [
      {
        label: 'File',
        icon: 'fa-folder',
        items: [
          {
            label: 'Open',
            icon: 'fa-file',
            command: (event) => {
              console.log('Open');
            }
          },
          {
            label: 'Save',
            icon: 'fa-suitcase',
            command: (event) => {
              console.log('Save');
            }
          },
          {
            label: 'Close',
            icon: 'fa-window-close',
            command: (event) => {
              console.log('Close');
            }
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          {
            label: 'Copy',
            icon: 'fa-files-o',
            command: (event) => {
              console.log(this);
              console.log(event);
            }
          },
          {
            label: 'Cut',
            icon: 'fa-scissors',
            command: (event) => {
              console.log('Cut');
              console.log(this.oParentComponent);
              /**
               * Para referenciar una propiedad, esto me vale...
               * A ver como diablos referencio un método y no me cepillo
               * el contexto this.
               * Teóricamente hay que usar un servicio para esto, pero no
               * tengo demasiado claro como...
               */
              console.log(this.oParentComponent.treeContextualSelectedNodes);
              console.log(this.someEvent);
              /* for(var prop in this.oParentComponent) {
                console.log('Nombre de propiedad: ' + prop);
                console.log('Valor de propiedad: ');
                console.log(this.oParentComponent[prop]);
              } */
            }
          },
          {
            label: 'Paste',
            icon: 'fa-clipboard',
            loquesea: 'Datos detesteo',
            command: (event) => {
              console.log(event.item.loquesea);
            }
          }
        ]
      },
      {
        label: 'Project',
        icon: 'fa-code',
        items: [
          {
            label: 'Compile',
            icon: 'fa-space-shuttle',
            command: (event) => {
              console.log('Space Age Compilator...');
            }
          },
          {
            label: 'Run',
            icon: 'fa-ship',
            command: (event) => {
              console.log('Run like hell and dont look back');
            }
          }
        ]
      }
    ];
  }


  getMultipleMenuData() {
    return [
      {
        label: 'TestOption',
        icon: 'fa-spaceship',
        command: (event) => {
          console.log('To boldly go where no one has gone before...');
          console.log(this.oParentComponent.multipleTreeContextualSelectedNodes);
        }
      }
    ]
  }


}
