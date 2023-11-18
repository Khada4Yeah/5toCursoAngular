import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];

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
import { CategoriesService } from 'src/app/core/services/categories.service';
