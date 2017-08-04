import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DataTableModule, 
         SharedModule, 
         GrowlModule, 
         ContextMenuModule,
         BlockUIModule, 
         GMapModule,
         OrganizationChartModule,
         TreeNode,
         TreeModule,
         MegaMenuModule,
         MenubarModule,
         SlideMenuModule,
         MenuModule,
         TieredMenuModule,
         TabMenuModule,
         ChartModule,
         GalleriaModule,
         CodeHighlighterModule } from 'primeng/primeng';

// Example components imports
import { GmapExampleComponent } from './gmap-example/gmap-example.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { DatatableExampleComponent } from './datatable-example/datatable-example.component';
import { OrgchartExampleComponent } from './orgchart-example/orgchart-example.component';
import { TreeExampleComponent } from './tree-example/tree-example.component';
import { MenuExampleComponent } from './menu-example/menu-example.component';
import { ChartExampleComponent } from './chart-example/chart-example.component';
import { GalleriaExampleComponent } from './galleria-example/galleria-example.component';
import { CodeHighlightExampleComponent } from './code-highlight-example/code-highlight-example.component';


const aRutas : Routes = [
  { path: '', component: WelcomeComponentComponent },
  { path: 'welcome', component: WelcomeComponentComponent },
  { path: 'datatable', component: DatatableExampleComponent },
  { path: 'googlemap', component: GmapExampleComponent },
  { path: 'orgchart', component: OrgchartExampleComponent },
  { path: 'tree', component: TreeExampleComponent },
  { path: 'menu', component: MenuExampleComponent },
  { path: 'chart', component: ChartExampleComponent },
  { path: 'galleria', component: GalleriaExampleComponent },
  { path: 'code-highlight', component: CodeHighlightExampleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DatatableExampleComponent,
    WelcomeComponentComponent,
    GmapExampleComponent,
    OrgchartExampleComponent,
    TreeExampleComponent,
    MenuExampleComponent,
    ChartExampleComponent,
    GalleriaExampleComponent,
    CodeHighlightExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTableModule,
    GrowlModule,
    ContextMenuModule,
    BlockUIModule,
    GMapModule,
    OrganizationChartModule,
    BrowserAnimationsModule,
    TreeModule,
    MegaMenuModule,
    MenubarModule,
    SlideMenuModule,
    MenuModule,
    TieredMenuModule,
    TabMenuModule,
    ChartModule,
    GalleriaModule,
    CodeHighlighterModule,
    RouterModule.forRoot(aRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
