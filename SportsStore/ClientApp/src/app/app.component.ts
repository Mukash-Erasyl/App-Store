import { Component } from '@angular/core';
import { Repository } from './options/repository';
import { Product } from "./models/product.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private repo: Repository , private router: Router) { }
  get product(): Product {
      return this.repo.product;
}

get products(): Product[] {
  return this.repo.products;
}


createProduct() {
  this.repo.createProduct(new Product(0,"Стол" , "Стулья в кухню гостиную" , ""  ,
  32000 , true , 4 , this.repo.products[0].supplier , this.repo.products[0].category));
}



updateProduct() {
  let changes = new Map<string, any>();
  changes.set("name", "Green Kayak");
  changes.set("supplier", null);
  this.repo.updateProduct(1, changes);
}


deleteProduct() {
  this.repo.deleteProduct(1);
}

selectProduct(id: number) {
  this.repo.getProduct(id);
  this.router.navigateByUrl("/detail");
}
}
