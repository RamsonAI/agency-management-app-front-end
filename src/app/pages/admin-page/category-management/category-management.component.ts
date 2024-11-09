import { Component, inject, OnInit } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { DeleteModalComponent } from "../../modals/delete-modal/delete-modal.component";
import { CategoryService, LoadCategoryReponse } from '../../../core/services/category/category.service';
import { CommonModule } from '@angular/common';
import { Category } from '../../../core/services/category/category.model';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule



@Component({
  selector: 'app-category-management',
  standalone: true,
  imports: [RouterLink, DeleteModalComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './category-management.component.html',
  styleUrl: './category-management.component.css'
})
export class CategoryManagementComponent implements OnInit {

  //handle delete cofirmation
  public cform!:FormGroup

  constructor(private formbuilder:FormBuilder){
    this.cform = formbuilder.group({
      "categoryName": ['',Validators.required]
    })
  }
  onSubmit() {
    this.categoryService.createCategories(this.cform.value).subscribe((res)=>{
      console.log(res)
      // notify(res.message,'success',)
    })
    window.location.reload();
  }

  

  onConfirmDelete(){
    console.log("item deleted")
  }

  //handle Delete cancellation
  onCancelDelete(){
    console.log("Delete canceled")
  }

  categories!: Observable<Category[]>;

  private categoryService = inject(CategoryService);

  ngOnInit(): void {

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


}
