import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEDComponent } from './info-ed.component';

describe('InfoEDComponent', () => {
  let component: InfoEDComponent;
  let fixture: ComponentFixture<InfoEDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoEDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
