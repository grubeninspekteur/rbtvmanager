import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendungenOverviewComponent } from './sendungen-overview.component';

describe('SendungenOverviewComponent', () => {
  let component: SendungenOverviewComponent;
  let fixture: ComponentFixture<SendungenOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendungenOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendungenOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
