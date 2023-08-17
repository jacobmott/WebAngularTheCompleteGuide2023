import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  compToShow: string = "recipes";

  componentToShow(component: string) {
    this.compToShow = component;
  }
}
