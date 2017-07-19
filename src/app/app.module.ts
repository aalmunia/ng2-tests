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
         GMapModule } from 'primeng/primeng';
import { GmapExampleComponent } from './gmap-example/gmap-example.component';

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
    GmapExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTableModule,
    GrowlModule,
    ContextMenuModule,
    BlockUIModule,
    GMapModule,
    RouterModule.forRoot(aRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
