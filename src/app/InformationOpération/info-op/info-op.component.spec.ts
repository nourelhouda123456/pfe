import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOpComponent } from './info-op.component';

describe('InfoOpComponent', () => {
  let component: InfoOpComponent;
  let fixture: ComponentFixture<InfoOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoOpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
