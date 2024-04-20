import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreInfoComponent } from './autre-info.component';

describe('AutreInfoComponent', () => {
  let component: AutreInfoComponent;
  let fixture: ComponentFixture<AutreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutreInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
