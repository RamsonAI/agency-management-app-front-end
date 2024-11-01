import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTopBarComponent } from './landing-top-bar.component';

describe('LandingTopBarComponent', () => {
  let component: LandingTopBarComponent;
  let fixture: ComponentFixture<LandingTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingTopBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
