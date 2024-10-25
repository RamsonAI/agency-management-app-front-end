import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopbarComponent } from "../../../shared/topbar/topbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TopbarComponent, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
