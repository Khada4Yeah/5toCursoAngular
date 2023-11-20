import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/core/models/product.model';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'name', 'image', 'actions'];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.categoriesService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
