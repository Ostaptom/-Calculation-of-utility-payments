import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {GlobalImportModule} from "./global-import.module";
import {MainModule} from "./main/main.module";
import {mainRoutes} from "./main/main.routes";
import { RouterModule, Routes} from '@angular/router';

export const _routes:Routes = [
  ...mainRoutes
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(_routes,{useHash:true}),
    GlobalImportModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
