import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { WeeklyChallengesComponent } from './components/main-content/leaderboard/leaderboard.component';
import { UserService } from './services/user.service';
import { ParticipantsComponent } from './components/main-content/leaderboard/participants/participants.component';
import { LeaderboardService } from './services/leaderboard.service';
import { LeadersComponent } from './components/main-content/leaderboard/leaders/leaders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    WeeklyChallengesComponent,
    ParticipantsComponent,
    LeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService,LeaderboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
