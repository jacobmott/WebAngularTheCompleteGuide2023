import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserStateService } from '../userstate.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private userStateService: UserStateService) {
    this.users = this.userStateService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userStateService.setActive(id);
  }
}
