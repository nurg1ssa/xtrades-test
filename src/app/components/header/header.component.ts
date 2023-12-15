import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  user: User;
  private subscription: Subscription;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
    this.subscription = this.userService.userData.subscribe(
      data => this.user = data
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
