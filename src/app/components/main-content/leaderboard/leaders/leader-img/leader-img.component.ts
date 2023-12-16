import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leader-img',
  templateUrl: './leader-img.component.html',
  styleUrls: ['./leader-img.component.css']
})
export class LeaderImgComponent {
  @Input() imagePath: string = ''
  @Input() index: number = 0
}
