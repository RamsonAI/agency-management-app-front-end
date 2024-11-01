import { Component } from '@angular/core';
import { LandingTopBarComponent } from "../landing-top-bar/landing-top-bar.component";

@Component({
  selector: 'app-service-photos',
  standalone: true,
  imports: [LandingTopBarComponent],
  templateUrl: './service-photos.component.html',
  styleUrl: './service-photos.component.css'
})
export class ServicePhotosComponent {

}
