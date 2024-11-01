import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingTopBarComponent } from "../landing-top-bar/landing-top-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-agency-profile',
  standalone: true,
  imports: [CommonModule, LandingTopBarComponent, FooterComponent],
  templateUrl: './agency-profile.component.html',
  styleUrl: './agency-profile.component.css'
})
export class AgencyProfileComponent {

  agency = {
    agencyName: 'Your Agency Name',
    agencyEmail: 'contact@agency.com',
    phoneNumber: '+255 123 456 789',
    address: '123 Agency St.',
    city: 'Dar es Salaam',
    description: 'We offer high-quality services tailored to your needs. Our expertise ensures client satisfaction and professional results.',
    websiteUrl: 'https://www.youragency.com',
    facebookUrl: 'https://facebook.com/youragency',
    twitterUrl: 'https://twitter.com/youragency',
    instagramUrl: 'https://instagram.com/youragency',
    linkedinUrl: 'https://linkedin.com/company/youragency',
    imageProfile: 'https://via.placeholder.com/150', // Placeholder image; replace with real URL
    
    owner: {
      name: 'John Doe',
      contact: '+255 987 654 321',
      photo: 'https://via.placeholder.com/100' // Placeholder; replace with real URL
    },
    
    services: [
      {
        name: 'Service 1',
        description: 'This is an excellent service that provides high value.',
        price: 50000
      },
      {
        name: 'Service 2',
        description: 'Another amazing service tailored for your needs.',
        price: 70000
      },
      {
        name: 'Service 3',
        description: 'A premium service for those looking for the best quality.',
        price: 120000
      }
    ]
  };



}
