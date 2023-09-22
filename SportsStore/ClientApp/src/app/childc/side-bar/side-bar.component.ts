import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Repository } from 'src/app/options/repository';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {


  constructor(private repo: Repository) { }

  ngOnInit(): void {
  }

  get categories(): Category[] {
    return this.repo.categories;
}

setCategory(categoryy: string='') {
  this.repo.filter.category = categoryy;
  this.repo.getProducts();
}

}
