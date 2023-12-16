import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contest } from 'src/app/models/contest.model';
import { ContestService } from 'src/app/services/contest.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnDestroy {
  weeklyContest: Contest[] = [];
  private subscription: Subscription;


  constructor(private contestService: ContestService) {
    this.weeklyContest = this.contestService.getContest()
    this.subscription = this.contestService.weeklyContestData.subscribe((data) => {
      this.weeklyContest = data;
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
