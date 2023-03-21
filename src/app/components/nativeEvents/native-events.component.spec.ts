import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeEventsComponent } from './native-events.component';

describe('NativeEventsComponent', () => {
  let component: NativeEventsComponent;
  let fixture: ComponentFixture<NativeEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NativeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
