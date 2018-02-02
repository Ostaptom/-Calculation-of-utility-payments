import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gas-block',
  templateUrl: './gas-block.component.html',
  styleUrls: ['./gas-block.component.css']
})
export class GasBlockComponent implements OnInit {

  oldNumber: number;
  newNumber: number;
  result: number = 0;

  constructor() { }

  ngOnInit() {
  }

  createResult() {
    if(this.result < 0) {
      this.result = 0;
      alert("Не правильно введені дані")
    }
    this.result = (this.newNumber - this.oldNumber) * 6.9579;
  }

}
