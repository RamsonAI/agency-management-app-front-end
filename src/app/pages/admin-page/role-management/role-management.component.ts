import { Component, inject, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoleService } from '../../../core/services/role/role.service';
import { Observable, of } from 'rxjs';
import { Roles } from '../../../core/services/role/roles.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role-management',
  standalone: true,
  imports: [RouterLink,CommonModule, ReactiveFormsModule],
  templateUrl: './role-management.component.html',
  styleUrl: './role-management.component.css'
})
export class RoleManagementComponent implements OnInit {

  roles!: Observable<Roles[]>;
  roleToDelete: any |  null = null;

  setRoleToDelete(uuid: string){
    this.roleToDelete = uuid;
  }

  public roleForm!:FormGroup

  private roleService = inject(RoleService);

  constructor(private formBuilder: FormBuilder){
    this.roleForm = formBuilder.group({
      "name":['', Validators.required],
      "description":['', Validators.required]
    })
  }

  ngOnInit(): void {
      this.getAllRoles();
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

  onSubmit(){
    this.roleService.createRole(this.roleForm.value).subscribe(
      (res)=>{
        console.log(res)
      }
    )
    window.location.reload();
  }

  onDelete(uuid: string){

    if(!uuid) return;

    this.roleService.deleteRole(uuid).subscribe(()=>{
      console.log("Category Deleted", uuid);
      this.getAllRoles();
      this.roleToDelete = null;
    })
  }

}
