import { Component, inject } from '@angular/core';
import { LandingTopBarComponent } from "../landing-top-bar/landing-top-bar.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-specific-service',
  standalone: true,
  imports: [LandingTopBarComponent, CommonModule, FooterComponent],
  templateUrl: './specific-service.component.html',
  styleUrl: './specific-service.component.css'
})
export class SpecificServiceComponent {

  private route = inject(Router)

  service = {
    name: 'Premium Cleaning Service',
    photos: [
      'assets/loundry.jpg',
      'assets/loundry.jpg',
      'assets/loundry.jpg',
      'assets/loundry.jpg',
      'assets/loundry.jpg'
    ],
    description: 'Our premium cleaning service offers top-notch cleaning for residential and commercial properties.',
    price: 12000,
    owner: {
      name: 'John Doe',
      photo: 'assets/ramson.jpeg',
      contact: 'john.doe@example.com'
    },
    reviews: [
      {
        userName: 'Alice Smith',
        userPhoto: 'assets/ramson.jpeg',
        date: new Date(),
        comment: 'Excellent service and very professional!'
      },
      {
        userName: 'Bob Johnson',
        userPhoto: 'assets/ramson.jpeg',
        date: new Date(),
        comment: 'Highly recommended. Worth every penny!'
      },
      {
        userName: 'Alice Smith',
        userPhoto: 'assets/ramson.jpeg',
        date: new Date(),
        comment: 'Excellent service and very professional!'
      },
      {
        userName: 'Bob Johnson',
        userPhoto: 'assets/ramson.jpeg',
        date: new Date(),
        comment: 'Highly recommended. Worth every penny!'
      },
      {
        userName: 'Alice Smith',
        userPhoto: 'assets/ramson.jpeg',
        date: new Date(),
        comment: 'Excellent service and very professional!'
      },
      {
        userName: 'Bob Johnson',
        userPhoto: 'assets/ramson.jpeg',
        date: new Date(),
        comment: 'Highly recommended. Worth every penny!'
      },
    ]
  };

  viewAllPhotos() {
    // Logic to display all photos, e.g., open a modal
    // alert('Viewing all photos');
    this.route.navigateByUrl("/service-photos");

  }

}
