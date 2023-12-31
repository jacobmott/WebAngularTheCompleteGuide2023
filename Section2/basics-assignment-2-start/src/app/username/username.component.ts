import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  userName: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  resetUsername() {
    this.userName = "";
  }

  userNameEmpty() {
    return this.userName.length === 0;
  }

}
