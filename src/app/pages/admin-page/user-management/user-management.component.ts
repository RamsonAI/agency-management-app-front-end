import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from "../../../shared/pagination/pagination.component";

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [RouterLink, PaginationComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {

}
