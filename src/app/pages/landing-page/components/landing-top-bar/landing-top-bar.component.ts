import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-top-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './landing-top-bar.component.html',
  styleUrl: './landing-top-bar.component.css'
})
export class LandingTopBarComponent {

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
