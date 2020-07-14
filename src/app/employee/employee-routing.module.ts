import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
    data: { staticStringFromRouteConfig: 'foo' }
  },
  {
    path: ':id',
    component: EmployeeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class EmployeeRoutingModule {
}
