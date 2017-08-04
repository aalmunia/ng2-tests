import { Injectable } from '@angular/core';

@Injectable()
export class MenuExampleService {

  // Esto habría que refactorizarlo usando rjxs, Subject y Observable patterns
  oComponentUses: any;

  constructor() { }

  // Idem que antes, refactorizar. De momento lo dejo porque mas o menos funciona,
  // aunque es una ñapa bastante cutre.
  setComponentReference(oComponent) {
    this.oComponentUses = oComponent;
  }

  getMegaMenuStruct() {
    return [
      {
        label: 'File',
        icon: 'fa-file',
        items: [
          [
            {
              label: 'New',
              icon: 'fa-plus-circle'
            },
            {
              label: 'Open',
              icon: 'fa-folder-open'
            },
            {
              label: 'Preferences',
              icon: 'fa-cogs',
              items: [
                {
                  label: 'Color palette',
                  icon: 'fa-paint-brush'
                },
                {
                  label: 'Settings',
                  icon: 'fa-cog'
                },
                {
                  label: 'Snippets',
                  icon: 'fa-code'
                },
                {
                  label: 'Editor',
                  icon: 'fa-edit'
                }
              ]
            }
          ]
        ]        
      }
    ];
  }
  
  hndlMenuOptionClick(oEvent, oToModify) {
    this.oComponentUses[oToModify] = "ELEMENTO SELECCIONADO: ";
    this.oComponentUses[oToModify] += oEvent.item.label;
  }


  getStdMenuStruct() {
    var oStruct = [
      {
        label: 'File',
        icon: 'fa-file',
        items: [
          {
            label: 'New',
            icon: 'fa-plus-circle',
            command: (event) => {
              this.hndlMenuOptionClick(event, 'horizontalSelectedMenuItems');
            }
          },
          {
            label: 'Open',
            icon: 'fa-folder-open',
            command: (event) => {
              this.hndlMenuOptionClick(event, 'horizontalSelectedMenuItems');
            }
          },
          {
            label: 'Preferences',
            icon: 'fa-cogs',
            items: [
              {
                label: 'Color palette',
                icon: 'fa-paint-brush'
              },
              {
                label: 'Settings',
                icon: 'fa-cog'
              },
              {
                label: 'Snippets',
                icon: 'fa-code'
              },
              {
                label: 'Editor',
                icon: 'fa-edit'
              }
            ]
          }
        ],
        command: (event) => {
          this.oComponentUses.horizontalSelectedMenuItems = "ELEMENTO SELECCIONADO: ";
          this.oComponentUses.horizontalSelectedMenuItems += event.item.label;
        }
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          {
            label: 'Copy',
            icon: 'fa-files-o'         
          },
          {
            label: 'Cut',
            icon: 'fa-scissors'
          },
          {
            label: 'Paste',
            icon: 'fa-clipboard'
          }
        ]
      },
      {
        label: 'Project',
        icon: 'fa-university',
        items: [
          {
            label: 'Run',
            icon: 'fa-play'
          },
          {
            label: 'Compile',
            icon: 'fa-html5'            
          },
          {
            label: 'Debug',
            icon: 'fa-bug'
          }
        ]
      },
      {
        label: 'Help',
        icon: 'fa-question',
        items: [
          {
            label: 'Documentation',
            icon: 'fa-book'
          },
          {
            label: 'About',
            icon: 'fa-cube'
          }
        ]
      }
    ];
    return oStruct;
  }

  getMenuTwoLevels() {
    return [
      {
        label: 'Frontend',
        icon: 'fa-html5',
        items: [
          {
            label: 'html',
            command: (event) => {
              console.log(event);
              console.log(this);
              /**
               * ¿Disparar evento con el texto seleccionado?
               * De algun modo hay que informar al resto de componentes
               * de la aplicación de la selección de una nueva opción
               * de menú.
               */
              /* console.log(a);
              console.log(b);
              console.log(c); */
            }
          },
          {
            label: 'css'
          },
          {
            label: 'javascript'
          }
        ]
      },
      {
        label: 'Backend',
        icon: 'fa-server',
        items: [
          {
            label: 'php'
          },
          {
            label: '.NET'
          },
          {
            label: 'Python'
          }        
        ]
      },
      {
        label: 'Database',
        icon: 'fa-database',
        items: [
          {
            label: 'MySQL'
          },
          {
            label: 'SQL SERVER'
          },
          {
            label: 'PostgreSQL'
          }
        ]
      }
    ];
  }


  getTabbedMenuStruct() {
    return [
      {
        label: 'Calendario',
        icon: 'fa-calendar'
      },
      {
        label: 'Twitter',
        icon: 'fa-twitter'
      },
      {
        label: 'Facebook',
        icon: 'fa-facebook'
      },
      {
        label: 'Android',
        icon: 'fa-android'
      },
      {
        label: 'Flickr',
        icon: 'fa-flickr'
      }
    ];
  }


}
