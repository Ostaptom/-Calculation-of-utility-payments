import {Route, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {HomeComponent} from './home/home.component';
import {LightBlockComponent} from "./home/light-block/light-block.component";
import {GasBlockComponent} from "./home/gas-block/gas-block.component";

export const mainRoutes: Routes = [
  {
    path: '', component: MainComponent, children:
      [
        {path: '', component: HomeComponent},
      ]
  },
];

