import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopbarComponent } from "../../../shared/topbar/topbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";
import { DashboardService } from '../../../core/services/dashboard/dashboard.service';
import { Observable, of } from 'rxjs';
import { Category } from '../../../core/services/category/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TopbarComponent, SidebarComponent , CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  totalCategories!: Observable<number>;

  private dashboardService = inject(DashboardService);

  ngOnInit(): void {
    this.getTotalCategories();
  }

  getTotalCategories(){

    this.dashboardService.countCategories().subscribe(
      (data) => {
        this.totalCategories = of(data)
        console.log(data);
      },
      (error)=>{
        console.error("Error fetching categories", error);
      }
    )
  }

}
