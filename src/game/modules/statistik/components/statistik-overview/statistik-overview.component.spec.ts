import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistikOverviewComponent } from './statistik-overview.component';

describe('StatistikOverviewComponent', () => {
  let component: StatistikOverviewComponent;
  let fixture: ComponentFixture<StatistikOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistikOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistikOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
