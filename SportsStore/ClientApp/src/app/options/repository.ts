import { Product } from "../models/product.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Supplier } from "../models/supplier.model";
import { Category } from "../models/category.model"; { }
import { Filter } from "../models/configClasses.repository";
import { Observable } from "rxjs";

const productsUrl = "/api/products";
const suppliersUrl = "/api/suppliers";
const categoriesUrl = "/api/categories";

@Injectable()
export class Repository {
    product: Product = new Product();
    suppliers: Supplier[] = [];
    categories: Category[] = [];
    products: Product[] = [];
    filter: Filter = new Filter();
    sideBarFlag = false;
    logFlag = false;


    constructor(private http: HttpClient) {
        this.filter.category = "";
        this.filter.related = true;
        this.getProducts();
        this.getCategories(true);
        this.getSuppliers(true);
    }


    filtering = (categoryString: string) => {
        this.filter.category = categoryString;
        this.getProducts();

    }

    getProduct(id: number) {
        this.http.get<Product>(`${productsUrl}/${id}`)
            .subscribe(p => this.product = p);
    }

    getProducts(related = false) {
        let url = `${productsUrl}?related=${this.filter.related}`;
        if (this.filter.category) {
            url += `&category=${this.filter.category}`;
        }
        if (this.filter.search) {
            url += `&search=${this.filter.search}`;
        }
        this.http.get<Product[]>(url).subscribe(prods => this.products = prods);

    }


    createProduct(prod: Product) {
        let data = {
            name: prod.name, desc: prod.desc,
            imgLinks: prod.imgLinks,
            price: prod.price,
            availability: prod.availability, count: prod.count,
            supplier: prod.supplier ? prod.supplier.id : 0,
            category: prod.category ? prod.category.id : 0,
        };
        this.http.post<number>(productsUrl, data)
            .subscribe(id => {
                prod.id = id;
                this.products.push(prod);
            });
    }

    updateProduct(id: number, changes: Map<string, any>) {
        let patch: { op: string; path: string; value: any; }[] = [];
        changes.forEach((value, key) =>
            patch.push({ op: "replace", path: key, value: value }));
        this.http.patch(`${productsUrl}/${id}`, patch)
            .subscribe(() => this.getProducts());
    }

    getCategories(related = false) {
        this.http.get<Category[]>(`${categoriesUrl}?related=${related}`)
            .subscribe(prods => this.categories = prods);
    }

    getSuppliers(related = false) {
        this.http.get<Supplier[]>(`${suppliersUrl}?related=${related}`)
            .subscribe(prods => this.suppliers = prods);
    }

    deleteProduct(id: number) {
        this.http.delete(`${productsUrl}/${id}`)
            .subscribe(() => this.getProducts());
    }

    login(name: string, password: string): Observable<boolean> {
        return this.http.post<boolean>("/api/account/login",
            { name: name, password: password });
    }
    logout() {
        this.http.post("/api/account/logout", null).subscribe(response => { });
    }

}


    // public id?: number,
    // public name?: string,
    // public desc?: string,
    // public imgLinks?:string,
    // public price?: number ,
    // public availability?:boolean,
    // public count?:number ,
    // public supplier?: Supplier,
    // public category?: Category



