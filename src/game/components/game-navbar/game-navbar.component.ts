import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-navbar',
  templateUrl: './game-navbar.component.html',
  styleUrls: ['./game-navbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
