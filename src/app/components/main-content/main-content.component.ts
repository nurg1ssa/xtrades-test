import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Leader } from 'src/app/models/leader.model';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnDestroy {
  wCLeaders: Leader[];
  dGWLeaders: Leader[];
  private subscription: Subscription;

  constructor(private lboardService: LeaderboardService) {
    this.wCLeaders = this.lboardService.getWCLeader();
    this.dGWLeaders = this.lboardService.getdGWLeaders()
    this.subscription = this.lboardService.wCLeadersData.subscribe((data) => {
      this.wCLeaders = data;
    });
    this.subscription = this.lboardService.dGWLeadersData.subscribe((data) => {
      this.dGWLeaders = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
