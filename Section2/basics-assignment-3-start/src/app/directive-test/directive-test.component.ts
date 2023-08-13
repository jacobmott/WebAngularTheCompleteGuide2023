import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.css']
})
export class DirectiveTestComponent implements OnInit {
  buttonClicks = [];
  buttonClickCurrentCount: number = 0;
  buttonEnabled: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  buttonClicked() {
    this.buttonClickCurrentCount += 1;
    this.buttonClicks.push(this.buttonClickCurrentCount);
    this.buttonEnabled = !this.buttonEnabled;
  }
  
  greaterOrEqualToFifthItem (clickNum: number) {  
    if (clickNum >= 5){
      return true;
    }
    return false;
  }

  getBackgroundColor(clickNum: number) {  
    if (clickNum >= 5){
      return "blue";
    }
    return "green";
  }
}
