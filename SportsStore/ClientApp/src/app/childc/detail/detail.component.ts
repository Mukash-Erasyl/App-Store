import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Repository } from 'src/app/options/repository';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private repo: Repository) { }
    get product(): Product {
        return this.repo.product;
}



  ngOnInit(): void {
  }

}
