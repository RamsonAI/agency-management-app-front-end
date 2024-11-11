import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';



export interface LoadCategoryReponse 
{
  content : Category[]
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiurl = "http://localhost:8080/api/categories";

  constructor(private http: HttpClient) {}

  fetchAllCategories(): Observable<LoadCategoryReponse>{
    return this.http.get<LoadCategoryReponse>(this.apiurl);
  }
  
  createCategories(data: any): Observable<LoadCategoryReponse>{
    return this.http.post<any>(this.apiurl, data);
  }

  deleteCategory(uuid: string): Observable<void>{
    return this.http.delete<void>(`${this.apiurl}/${uuid}`);
  }

}
