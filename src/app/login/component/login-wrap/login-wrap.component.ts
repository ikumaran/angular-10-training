import {Component, OnInit} from '@angular/core';
import {LoginResponse} from '../login/login.component';

@Component({
  selector: 'app-login-wrap',
  templateUrl: './login-wrap.component.html',
  styleUrls: ['./login-wrap.component.scss']
})
export class LoginWrapComponent implements OnInit {
  loginResponse: LoginResponse;
  showProgress: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }


  onLoginResponse(response): void {
    this.loginResponse = response;
  }

  onProgressBarUpdate(response): void {
    this.showProgress = response;
  }
}
