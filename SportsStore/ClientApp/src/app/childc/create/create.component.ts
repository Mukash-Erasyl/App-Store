import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { Supplier } from 'src/app/models/supplier.model';
import { Repository } from 'src/app/options/repository';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private repo: Repository , private router: Router) { }


  aviaFlag = false;

  sId=""
  cId=""
  imgL = ""


  get products(): Product[] {
    return this.repo.products;
    }

  get categories(): Category[] {
    return this.repo.categories;
}
  get suppliers(): Supplier[] {
    return this.repo.suppliers;
}


aviaChange =() => {
  this.aviaFlag = !this.aviaFlag;
}

createProduct(name:string ,desc:string ,  imgLinks:string , price:string , availability:boolean , count:string ,  supplier:string , category:string ) {
  this.repo.createProduct(new Product(this.products.length + 1 , name , desc , imgLinks , Number(price) , this.aviaFlag , Number(count) , this.repo.suppliers[Number(supplier)-1] , this.repo.categories[Number(category)]));
  this.router.navigateByUrl("/basel");

  this.repo.getProducts();
}

// <!-- public id?: number,
// public name?: string,
// public desc?: string,
// public imgLinks?:string,
// public price?: number ,
// public availability?:boolean,
// public count?:number ,
// public supplier?: Supplier,
// public category?: Category -->
  ngOnInit(): void {
  }

}
