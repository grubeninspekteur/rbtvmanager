import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendeplanComponent } from './sendeplan.component';

describe('SendeplanComponent', () => {
  let component: SendeplanComponent;
  let fixture: ComponentFixture<SendeplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendeplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendeplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
