import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private Http: HttpClient) { }

  private apiurl = "http://localhost:8080/api/categories/count";
  private roleUrl = "http://localhost:8080/api/user-role/count";
  private agencyUrl = "http://localhost:8080/api/agencies/count";
  private serviceUrl = "http://localhost:8080/api/services/count";
  private userUrl = "http://localhost:8080/api/user/count"

  countCategories(): Observable<number>{
    return this.Http.get<number>(this.apiurl);
  }

  countRoles(): Observable<number>{
    return this.Http.get<number>(this.roleUrl);
  }

  countAgencies(): Observable<number>{
    return this.Http.get<number>(this.agencyUrl);
  }

  countServices(): Observable<number>{
    return this.Http.get<number>(this.serviceUrl);
  }

  countUsers(): Observable<number>{
    return this.Http.get<number>(this.userUrl);
  }

}
