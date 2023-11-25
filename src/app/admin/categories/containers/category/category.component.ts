import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CategoriesService } from './../../../../core/services/categories.service';
import { Category } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category: Category;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('category component');

    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.getCategory(params.id);
      }
    });
  }

  createCategory(data) {
    console.log('data', data);

    this.categoriesService.createCategory(data).subscribe(
      (rta) => {
        console.log(rta);

        this.router.navigate(['/admin/categories']);
      },
      (err) => console.log(err)
    );
  }

  updateCategory(data) {
    this.categoriesService
      .updateCategory(this.category.id.toString(), data)
      .subscribe((rta) => {
        console.log(rta);

        this.router.navigate(['/admin/categories']);
      });
  }

  private getCategory(id: string) {
    this.categoriesService.getCategory(id).subscribe((data) => {
      this.category = data;
    });
  }
}
