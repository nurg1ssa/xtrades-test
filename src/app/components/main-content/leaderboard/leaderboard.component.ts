import { Component, Input, OnInit } from '@angular/core';
import { Contest } from 'src/app/models/contest.model';
import { Leader } from 'src/app/models/leader.model';
import { Sponsor } from 'src/app/models/sponsor.model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class WeeklyChallengesComponent implements OnInit {
  @Input() contest: Contest = {} as Contest;

  leaders: Leader[] = [];
  sponsor: Sponsor = {} as Sponsor;

  constructor() {}

  ngOnInit() {
    this.leaders = this.contest.leaders;
    this.sponsor = this.contest.sponsor;
  }
}
