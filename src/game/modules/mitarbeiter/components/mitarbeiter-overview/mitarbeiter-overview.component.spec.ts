import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitarbeiterOverviewComponent } from './mitarbeiter-overview.component';

describe('MitarbeiterOverviewComponent', () => {
  let component: MitarbeiterOverviewComponent;
  let fixture: ComponentFixture<MitarbeiterOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitarbeiterOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitarbeiterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
