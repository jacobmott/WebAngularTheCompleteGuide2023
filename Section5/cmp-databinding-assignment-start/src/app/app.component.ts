import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];


  onIncrement(myNumber: number){
    console.log("HERE number is: "+myNumber);
    if (myNumber % 2) {
      this.oddNumbers.push(myNumber);
    }
    else {
      this.evenNumbers.push(myNumber);
    }
  }




}
