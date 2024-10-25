import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  isLogedIn = true;

  constructor(private router: Router){}

  // private router = inject(Router)

  getStarted(){
    if(this.isLogedIn){
      this.router.navigate(['/dashboard']);
    }else{this.router.navigate(['/login']);}
  }

}
