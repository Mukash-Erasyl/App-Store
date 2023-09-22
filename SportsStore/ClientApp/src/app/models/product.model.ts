import { Supplier } from "./supplier.model";
import { ImgModel } from "./img.model";
import { Category } from "./category.model";
export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public desc?: string,
        public imgLinks?:string,
        public price?: number ,
        public availability?:boolean,
        public count?:number ,
        public supplier?: Supplier,
        public category?: Category


        
        ) { }
}


