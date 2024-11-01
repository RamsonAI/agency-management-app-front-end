import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificServiceComponent } from './specific-service.component';

describe('SpecificServiceComponent', () => {
  let component: SpecificServiceComponent;
  let fixture: ComponentFixture<SpecificServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
