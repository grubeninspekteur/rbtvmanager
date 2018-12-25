import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  template: `<a mat-button
  [ngClass.lt-md]="{'small-button': true}"
  [ngClass.gt-sm]="{'small-button': false}">
  <mat-icon [matBadge]="badgeCount" matBadgePosition="above before"
  [matBadgeHidden]="!badgeCount">{{ matIcon }}</mat-icon><span fxHide fxShow.gt-sm>{{ label }}</span>
</a>`,
  styleUrls: ['./navbar-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarButtonComponent implements OnInit {

  @Input() matIcon: string;
  @Input() label: string;
  @Input() badgeCount?: number;

  constructor() { }

  ngOnInit() {
  }

}
