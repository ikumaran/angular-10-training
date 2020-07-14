import {Component, Input, OnInit} from '@angular/core';
import {LoginResponse} from '../login/login.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Input() loginUserInfo: LoginResponse;

  constructor() {
    console.log(this.loginUserInfo);
  }

  ngOnInit(): void {
    console.log(this.loginUserInfo);
  }

}
