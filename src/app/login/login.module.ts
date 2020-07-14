import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './component/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LoginWrapComponent } from './component/login-wrap/login-wrap.component';
import {AppModule} from '../app/app.module';
import {WelcomeComponent} from './component/welcome/welcome.component';

@NgModule({
  declarations: [LoginComponent, LoginWrapComponent, WelcomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class LoginModule {
}
