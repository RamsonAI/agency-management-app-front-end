import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category/category.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private Http: HttpClient) { }

  private apiurl = "http://localhost:8080/api/categories/count";

  countCategories(): Observable<number>{
    return this.Http.get<number>(this.apiurl);
  }
}
