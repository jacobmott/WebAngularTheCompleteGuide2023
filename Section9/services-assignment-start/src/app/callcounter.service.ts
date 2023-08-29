export class CalCounterService {
  activeUsers: number = 0;
  inactiveUsers = 0;



  incrementCount(type: string) {
    if (type === "active"){
      ++this.activeUsers;
      console.log('activeUsers called: ' + this.activeUsers + ' times');      
    }
    if (type === "inactive"){
      ++this.inactiveUsers;
      console.log('inactiveUsers called: ' + this.inactiveUsers + ' times');
    }    

  }
}
