import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  progressBarSubject = new Subject<boolean>();
  progressBarObservable = this.progressBarSubject.asObservable();

  constructor() {
  }

  updateProgressBarStatus(show): void {
    this.progressBarSubject.next(show);
  }

  showProgressBar$(): Observable<boolean> {
    return this.progressBarObservable;
  }
}
