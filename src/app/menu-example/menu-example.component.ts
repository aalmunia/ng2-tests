import { ViewChild, Component, OnInit, TemplateRef } from '@angular/core';

// Imports de controles menu de primeng
import { MegaMenuModule, 
         MenuItem, 
         MenuModule, 
         MenubarModule, 
         SlideMenuModule,
         TieredMenuModule,
         TabMenuModule } from 'primeng/primeng';

import { MenuExampleService } from './menu-example.service';

@Component({
  selector: 'app-menu-example',
  providers: [ MenuExampleService ],
  templateUrl: './menu-example.component.html',
  styleUrls: ['./menu-example.component.css']
})
export class MenuExampleComponent implements OnInit {

  /**
   * El único elemento que se puede acceder dentro de esto, para
   * hacer algo, es la propiedad .model. No tiene métodos que 
   * se puedan llamar en plan selectedItem o algo por el estilo
   * Parece que todo debe hacerse a través del command: (event) => { ... }
   * que suministran estos objetos de menu.
   */
  @ViewChild('myMenuBar') myMenuBar: MenubarModule;

  megaMenuItems: MenuItem[];
  standardMenuItems: MenuItem[];
  twoLevelsMenuItems: MenuItem[];
  tabbedMenuItems: MenuItem[];

  horizontalSelectedMenuItems: String;

  constructor(private oServiceData: MenuExampleService) { }

  ngOnInit() {
    this.oServiceData.setComponentReference(this);
    this.megaMenuItems = this.oServiceData.getMegaMenuStruct();
    this.standardMenuItems = this.oServiceData.getStdMenuStruct();
    this.twoLevelsMenuItems = this.oServiceData.getMenuTwoLevels();
    this.tabbedMenuItems = this.oServiceData.getTabbedMenuStruct();
  }

  menuBarClicked(oEvent) {    
    // console.log(this.myMenuBar);
    for(var prop in this.myMenuBar) {
      console.log('PROPIEDAD: ' + prop);
      console.log(this.myMenuBar[prop]);
    }
  }

}
