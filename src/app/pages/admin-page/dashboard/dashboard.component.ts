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
  imports: [RouterLink,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  totalCategories!: Observable<number>;

  totalRoles!: Observable<number>;

  totalAgencies!: Observable<number>;

  totalServices!: Observable<number>;

  totalUsers!: Observable<number>;

  private dashboardService = inject(DashboardService);

  ngOnInit(): void {
    this.getTotalCategories();
    this.getTotalRoles();
    this.getTotalAgencies();
    this.getTotalServices();
    this.getTotalUsers();
  }

  getTotalCategories(){

    this.dashboardService.countCategories().subscribe(
      (data) => {
        this.totalCategories = of(data)
        console.log(data);
      },
      (error)=>{
        console.error("Error while fetching categories", error);
      }
    )
  }

  getTotalRoles(){
    this.dashboardService.countRoles().subscribe(
      (data) => {
        this.totalRoles = of(data)
        console.log(data);
      },
      (error)=>{
        console.error("Error while counting roles", error)
      }
    )
  }

  getTotalAgencies(){
    this.dashboardService.countAgencies().subscribe(
      (data) => {
        this.totalAgencies = of(data)
        console.log(data);
      },
      (error)=>{
        console.error("Error while counting agencies", error);
      }
    )
  }

  getTotalServices(){
    this.dashboardService.countServices().subscribe(
      (data)=>{
        this.totalServices = of(data)
        console.log(data)
      },
      (error)=>{
        console.error("Error while counting services", error)
      }
    )
  }

  getTotalUsers(){
    this.dashboardService.countUsers().subscribe(
      (data)=>{
        this.totalUsers = of(data)
        console.log(data)
      },
      (error)=>{
        console.error("Error while counting users", error);
      }
    )
  }

}
