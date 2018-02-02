import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-block',
  templateUrl: './light-block.component.html',
  styleUrls: ['./light-block.component.css']
})
export class LightBlockComponent implements OnInit {

  oldNumber: number;
  newNumber: number;
  tempResult: number;
  result: number = 0;

  constructor() { }

  ngOnInit() {
  }

  createResult() {
    this.tempResult = this.newNumber - this.oldNumber;
    if(this.tempResult < 0) {
      this.result = 0;
      alert("Не правильно введені дані")
    }
    if(this.tempResult <= 100) {
      this.result = this.tempResult * 0.75;
    }
    if(this.tempResult > 100) {
      this.result = ((this.tempResult - 100) * 1.4) + 75;
    }
  }

}
