import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() compToShow = new EventEmitter<string>();

  componentToShow(component: string) {
    this.compToShow.emit(component);
  }


}
