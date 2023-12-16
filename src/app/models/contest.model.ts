import { Leader } from './leader.model';
import { Participant } from './participant.model';
import { Sponsor } from './sponsor.model';

export class Contest {
  public id: number;
  public name: string;
  public sponsor: Sponsor;
  public leaders: Leader[];
  public days: number;
  public isFinished: boolean;
  public participants: Participant[];


  constructor(
    id: number,
    name: string,
    sponsor: Sponsor,
    leaders: Leader[],
    days: number,
    isFinished: boolean,
    participants: Participant[],
  ) {
    this.id = id;
    this.name = name;
    this.sponsor = sponsor;
    this.leaders = leaders;
    this.days = days;
    this.isFinished = isFinished;
    this.participants = participants;
  }
}
