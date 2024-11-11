import { Component, inject, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoleService } from '../../../core/services/role/role.service';
import { Observable, of } from 'rxjs';
import { Roles } from '../../../core/services/role/roles.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role-management',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './role-management.component.html',
  styleUrl: './role-management.component.css'
})
export class RoleManagementComponent implements OnInit {

  roles!: Observable<Roles[]>;

  private roleService = inject(RoleService);

  ngOnInit(): void {
      
  }

  private getAllRoles(): void{
    this.roleService.fetchAllRoles().subscribe(
      (data)=>{
        console.log(data);
        this.roles = of(data.content);
    },
    (error) => {
      console.error("Error fetching roles", error);
    }
  )
  }

}
