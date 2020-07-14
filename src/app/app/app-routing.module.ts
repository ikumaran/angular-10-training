import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginWrapComponent} from '../login/component/login-wrap/login-wrap.component';


const routes: Routes = [
  {
    path: '',
    component: LoginWrapComponent
  },
  {
    path: 'employee',
    loadChildren: () => import('../employee/employee.module').then(module => module.EmployeeModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
