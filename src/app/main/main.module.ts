import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalImportModule} from "../global-import.module";
import {HomeComponent} from "./home/home.component";
import {MainComponent} from "./main.component";
import { LightBlockComponent } from './home/light-block/light-block.component';
import { GasBlockComponent } from './home/gas-block/gas-block.component';

@NgModule({
  imports: [
    CommonModule,
    GlobalImportModule
  ],
  declarations: [
    HomeComponent,
    MainComponent,
    LightBlockComponent,
    GasBlockComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MainModule { }
