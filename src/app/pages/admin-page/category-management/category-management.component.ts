import { Component, inject, OnInit } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { CategoryService, LoadCategoryReponse } from '../../../core/services/category/category.service';
import { CommonModule } from '@angular/common';
import { Category } from '../../../core/services/category/category.model';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from "../../../shared/pagination/pagination.component"; // Import ReactiveFormsModule



@Component({
  selector: 'app-category-management',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './category-management.component.html',
  styleUrl: './category-management.component.css'
})
export class CategoryManagementComponent implements OnInit {

  categoryToDelete: any | null = null;

  setCategoryToDelete(uuid: string){
    this.categoryToDelete = uuid;
  }

  //handle delete cofirmation
  public cform!:FormGroup
  categories!: Observable<Category[]>;

  private categoryService = inject(CategoryService);

  constructor(private formbuilder:FormBuilder){
    this.cform = formbuilder.group({
      "categoryName": ['',Validators.required],
      "categoryDescription": ['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories(): void{
    this.categoryService.fetchAllCategories().subscribe(
      (data) => {
        console.log(data)
        this.categories = of(data.content);
      },
      (error) => {
        console.error("Error fetching categories", error);
      }
    )
  }

  onSubmit() {
    this.categoryService.createCategories(this.cform.value).subscribe((res)=>{
      console.log(res)
    })
    window.location.reload();
  }

  onDelete(uuid: string){

    if(!uuid) return;

    this.categoryService.deleteCategory(uuid).subscribe(()=>{
      console.log("Category deleted", uuid);
      this.loadCategories();
      this.categoryToDelete = null;
      // window.location.reload();
    });
  }
}
