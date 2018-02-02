import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeTabs: number;

  constructor() {
  }


  ngOnInit() {
  }

  showTabs(tabsController: number) {
    this.activeTabs = tabsController;
  }

}
