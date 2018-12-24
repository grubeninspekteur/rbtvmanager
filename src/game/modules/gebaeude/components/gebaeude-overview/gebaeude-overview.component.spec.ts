import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebaeudeOverviewComponent } from './gebaeude-overview.component';

describe('GebaeudeOverviewComponent', () => {
  let component: GebaeudeOverviewComponent;
  let fixture: ComponentFixture<GebaeudeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebaeudeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebaeudeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
