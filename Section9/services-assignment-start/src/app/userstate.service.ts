import { EventEmitter, Injectable } from '@angular/core';

import { CalCounterService } from './callcounter.service';

@Injectable()
export class UserStateService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  statusUpdated = new EventEmitter<string>();

  constructor(private calCounterService: CalCounterService) {}

  setInactive(userId: number) {
    this.inactiveUsers.push(this.activeUsers[userId]);
    this.activeUsers.splice(userId, 1);
    this.calCounterService.incrementCount('inactive');
  }

  setActive(userId: number) {
    this.activeUsers.push(this.inactiveUsers[userId]);
    this.inactiveUsers.splice(userId, 1);
    this.calCounterService.incrementCount('active');
  }
}
