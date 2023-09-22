import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Repository } from 'src/app/options/repository';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
[x: string]: any;

  constructor(private repo: Repository , private router: Router) {
    this.aviaFlag = this.product.availability || false;
    

   }

   aviaFlag = false;
  get product(): Product {
    return this.repo.product;
}

aviaChange =() => {
  this.aviaFlag = !this.aviaFlag;
}

  ngOnInit(): void {
  }


  // public name?: string,
  // public desc?: string,
  // public imgLinks?:string,
  // public price?: number ,
  // public availability?:boolean,
  // public count?:number ,
  updateInfo = (id:number , name:string,desc:string,imgLinks:string ,price:string , availability:boolean , count:string  ) =>{
    let changes = new Map<string, any>();
    changes.set("name", name);
    changes.set("desc", desc);
    changes.set("imgLinks", imgLinks);
    changes.set("price", price);
    changes.set("availability", availability);
    changes.set("count", count);
    this.repo.updateProduct(id, changes);
    this.router.navigateByUrl("/basel");

    this.repo.getProducts();

    // this.repo.updateProduct(this.profile.Id || 1, changes);

  }


}

