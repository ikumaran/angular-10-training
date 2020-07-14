import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Employee, EmployeeResponse} from '../employee-list/employee-list.component';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProgressBarService} from '../../app/service/progress-bar.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;
  errored: boolean;

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar,
              private activatedRoute: ActivatedRoute, private progressBarService: ProgressBarService) {
  }

  ngOnInit(): void {
    this.progressBarService.updateProgressBarStatus(true);
    this.activatedRoute.params.subscribe(param => {
      this.httpClient.get(`https://reqres.in/api/users/${param.id}`).subscribe(
        (response: EmployeeResponse) => {
          this.errored = false;
          this.progressBarService.updateProgressBarStatus(false);
          this.employee = response.data;
        }, (error => {
          this.errored = true;
          this.progressBarService.updateProgressBarStatus(false);
          // TODO: should be configured at one place.
          this.snackBar.open(error.message, 'X', {
            duration: 10000,
            verticalPosition: 'top',
            panelClass: 'snack-bg'
          });
        })
      );
    });
  }

}
