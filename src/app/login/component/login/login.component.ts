import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';
import {ProgressBarService} from '../../../app/service/progress-bar.service';

export type LoginResponse = {
  isLoginSuccess: boolean;
  loggedInUser: string;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.max(10)
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.max(10)
  ]);
  showPassword: boolean;

  @Output() loginResponse = new EventEmitter<LoginResponse>();
  isLoggedIn: boolean;

  constructor(private loginService: LoginService, private router: Router, private progressBarService: ProgressBarService) {
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.isLoggedIn = this.loginService.validateLogin(this.username.value, this.password.value);
    this.loginResponse.emit({
      isLoginSuccess: this.isLoggedIn,
      loggedInUser: this.username.value
    });
    if (this.isLoggedIn) {
      this.progressBarService.updateProgressBarStatus(true);
      setTimeout(() => {
        this.progressBarService.updateProgressBarStatus(false);
        this.router.navigate(['employee']);
      }, 3000);
    }
  }

}
