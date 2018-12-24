import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiseOverviewComponent } from './merchandise-overview.component';

describe('MerchandiseOverviewComponent', () => {
  let component: MerchandiseOverviewComponent;
  let fixture: ComponentFixture<MerchandiseOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchandiseOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandiseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
