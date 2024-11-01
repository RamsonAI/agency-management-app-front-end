import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePhotosComponent } from './service-photos.component';

describe('ServicePhotosComponent', () => {
  let component: ServicePhotosComponent;
  let fixture: ComponentFixture<ServicePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
