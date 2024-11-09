import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  categories = [
    { icon: 'assets/ramson.jpeg', name: 'Category 1' },
    { icon: 'assets/ramson.jpeg', name: 'Category 2' },
    { icon: 'assets/ramson.jpeg', name: 'Category 3' },
    { icon: 'assets/ramson.jpeg', name: 'Category 1' },
    { icon: 'assets/ramson.jpeg', name: 'Category 2' },
    { icon: 'assets/ramson.jpeg', name: 'Category 3' },
    { icon: 'assets/ramson.jpeg', name: 'Category 1' },
    { icon: 'assets/ramson.jpeg', name: 'Category 2' },
    { icon: 'assets/ramson.jpeg', name: 'Category 3' },
    // Add more categories as needed
  ];

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: -150,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: 150,
      behavior: 'smooth'
    });
  }

}
