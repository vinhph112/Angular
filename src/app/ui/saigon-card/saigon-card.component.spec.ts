import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SaigonCardComponent} from './saigon-card.component';

describe('SaigonCardComponent', () => {
  let component: SaigonCardComponent;
  let fixture: ComponentFixture<SaigonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaigonCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaigonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
