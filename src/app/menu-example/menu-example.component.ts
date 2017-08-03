import { Component, OnInit } from '@angular/core';

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

  megaMenuItems: MenuItem[];
  standardMenuItems: MenuItem[];
  twoLevelsMenuItems: MenuItem[];
  tabbedMenuItems: MenuItem[];

  constructor(private oServiceData: MenuExampleService) { }

  ngOnInit() {
    this.megaMenuItems = this.oServiceData.getMegaMenuStruct();
    this.standardMenuItems = this.oServiceData.getStdMenuStruct();
    this.twoLevelsMenuItems = this.oServiceData.getMenuTwoLevels();
    this.tabbedMenuItems = this.oServiceData.getTabbedMenuStruct();
  }

}
