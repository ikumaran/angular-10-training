import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {ProgressBarService} from '../../app/service/progress-bar.service';

export interface EmployeeResponse {
  data: Employee;
  ad: {
    company: string;
    url: string;
    text: string;
  };
}

export interface Employee {
  id: string;
  email: string;
  first_name: string;
  last_name: number;
  avatar: string;
}

export interface EmployeeListResponse {
  data: Employee[];
  status: string;
  page: number;
  per_page: number;
  total_pages: number;
  total: number;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  employees: Employee[];
  employeesSub: Subscription;

  constructor(private httpClient: HttpClient, private progressBarService: ProgressBarService) {
  }

  ngOnInit(): void {
    this.progressBarService.updateProgressBarStatus(true);
    this.employeesSub = this.httpClient.get('https://reqres.in/api/users?page=2')
      .subscribe((response: EmployeeListResponse) => {
          this.employees = response.data;
          this.progressBarService.updateProgressBarStatus(false);
        }
      );
  }

  ngOnDestroy(): void {
    this.employeesSub.unsubscribe();
  }
}
