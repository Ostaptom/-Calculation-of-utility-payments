import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalImportModule} from "../global-import.module";
import {HomeComponent} from "./home/home.component";
import {MainComponent} from "./main.component";

@NgModule({
  imports: [
    CommonModule,
    GlobalImportModule
  ],
  declarations: [
    HomeComponent,
    MainComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MainModule { }
