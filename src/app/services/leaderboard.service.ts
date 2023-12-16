import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Leader } from '../models/leader.model';

@Injectable()
export class LeaderboardService {
  wCLeadersData = new Subject<Leader[]>();
  dGWLeadersData = new Subject<Leader[]>();

  private wCLeaders: Leader[] = [
    new Leader('Roger Korsgaard', true, 20, 85, 11, '+ $7,500', 45),
    new Leader('Charlie Herwitz', true, 20, 85, 11, '+ $1,430', 25),
    new Leader('Ahmad Mango', false, 20, 85, 11, '- $1,500', 10),
  ];

  private dGWLeaders: Leader[] = [
    new Leader('Zain Mango', true, 20, 85, 11, '+ $3,500', 32),
    new Leader('Leo Kenter', false, 20, 85, 11, '+ $2,550', 18),
    new Leader('Marcus Dias', false, 20, 85, 11, '+ $1,000', 10),
  ];

  getWCLeader() {
    return this.wCLeaders.slice();
  }
  getdGWLeaders() {
    return this.dGWLeaders.slice();
  }
}
