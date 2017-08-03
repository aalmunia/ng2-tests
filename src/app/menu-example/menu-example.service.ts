import { Injectable } from '@angular/core';

@Injectable()
export class MenuExampleService {

  constructor() { }

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


  getStdMenuStruct() {
    return [
      {
        label: 'File',
        icon: 'fa-file',
        items: [
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
  }

  getMenuTwoLevels() {
    return [
      {
        label: 'Frontend',
        icon: 'fa-html5',
        items: [
          {
            label: 'html'
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
