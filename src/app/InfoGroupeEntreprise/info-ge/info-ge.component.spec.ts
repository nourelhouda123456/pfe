import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGEComponent } from './info-ge.component';

describe('InfoGEComponent', () => {
  let component: InfoGEComponent;
  let fixture: ComponentFixture<InfoGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
