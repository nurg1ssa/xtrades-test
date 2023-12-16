import { Component, Input } from '@angular/core';
import { Sponsor } from 'src/app/models/sponsor.model';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent {
  @Input() isFinished: boolean = false;
  @Input() days: number = 0;
  @Input() sponsor: Sponsor = {} as Sponsor;

}
