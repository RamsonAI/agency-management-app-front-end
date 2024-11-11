import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles } from './roles.model';

  export class LoadRolesResponse {
    content: Roles[] = [];
  }


@Injectable({
  providedIn: 'root'
})
export class RoleService{


  apiUrl = "http://localhost:8080/api/user-role";

  constructor(private http: HttpClient) { }

  fetchAllRoles(): Observable<LoadRolesResponse>{
    ;return this.http.get<LoadRolesResponse>(this.apiUrl);
  }



}
