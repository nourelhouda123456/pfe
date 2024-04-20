import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationLieeComponent } from './participation-liee.component';

describe('ParticipationLieeComponent', () => {
  let component: ParticipationLieeComponent;
  let fixture: ComponentFixture<ParticipationLieeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipationLieeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationLieeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
