import { Injectable } from '@angular/core';

/**
 * @todo: Revisar CSS a ver por qué no aparecen los iconos de despliegue.
 */

@Injectable()
export class TreeExampleService {

  constructor() { }

  randomText() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

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

      var iChildren = this.getRandomInt(2, 3);

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

}
