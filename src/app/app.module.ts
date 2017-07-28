import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatatableExampleComponent } from './datatable-example/datatable-example.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { HttpModule } from '@angular/http';
import { DataTableModule, 
         SharedModule, 
         GrowlModule, 
         ContextMenuModule,
         BlockUIModule, 
         GMapModule,
         OrganizationChartModule,
         TreeNode } from 'primeng/primeng';
import { GmapExampleComponent } from './gmap-example/gmap-example.component';
import { OrgchartExampleComponent } from './orgchart-example/orgchart-example.component';


const aRutas : Routes = [
  { path: '', component: WelcomeComponentComponent },
  { path: 'datatable', component: DatatableExampleComponent },
  { path: 'googlemap', component: GmapExampleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DatatableExampleComponent,
    WelcomeComponentComponent,
    GmapExampleComponent,
    OrgchartExampleComponent
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
    RouterModule.forRoot(aRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
