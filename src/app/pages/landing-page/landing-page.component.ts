import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TopbarComponent } from "../../shared/topbar/topbar.component";
import { AgencyListComponent } from "./components/agency-list/agency-list.component";
import { LandingTopBarComponent } from './components/landing-top-bar/landing-top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { PaginationComponent } from "../../shared/pagination/pagination.component";
import { CategoryComponent } from "../../shared/category/category.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, LandingTopBarComponent, FooterComponent, AgencyListComponent, ServiceListComponent, SearchbarComponent, PaginationComponent, CategoryComponent],
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
