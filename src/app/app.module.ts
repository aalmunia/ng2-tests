import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatatableExampleComponent } from './datatable-example/datatable-example.component';

import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

import { HttpModule } from '@angular/http';

import {DataTableModule,SharedModule, GrowlModule} from 'primeng/primeng';

const aRutas : Routes = [
  { path: '', component: WelcomeComponentComponent },
  { path: 'datatable', component: DatatableExampleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DatatableExampleComponent,
    WelcomeComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTableModule,
    GrowlModule,
    RouterModule.forRoot(aRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
