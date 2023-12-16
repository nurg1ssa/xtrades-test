import { Component, Input } from '@angular/core';
import { Participant } from 'src/app/models/participant.model';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent {
  @Input() isLate: boolean = false;
  @Input() participants: Participant[] = [];

}
