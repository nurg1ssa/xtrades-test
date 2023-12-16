import { Component, Input } from '@angular/core';
import { Leader } from 'src/app/models/leader.model';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent {
  @Input() leaders: Leader[] = []
}
