import { Component, Input } from '@angular/core';
import { Leader } from 'src/app/models/leader.model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class WeeklyChallengesComponent {
    @Input() leaders: Leader[] = []
    @Input() theme: string = ''
    @Input() isLate: boolean = false

}
