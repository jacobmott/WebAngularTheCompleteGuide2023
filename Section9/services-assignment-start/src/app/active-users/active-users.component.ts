import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserStateService } from '../userstate.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private userStateService: UserStateService) {
    this.users = this.userStateService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userStateService.setInactive(id);
  }

}
