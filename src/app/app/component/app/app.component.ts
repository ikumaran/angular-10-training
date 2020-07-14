import {Component, OnInit} from '@angular/core';
import {ProgressBarService} from '../../service/progress-bar.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-training';
  showProgress = false;

  constructor(private progressBarService: ProgressBarService) {
  }

  ngOnInit(): void {
    this.progressBarService.showProgressBar$().pipe(
      delay(0)
    ).subscribe((response) => {
      this.showProgress = response;
    });
  }

  canDisplayProgressBar(): boolean {
    return this.showProgress;
  }
}
