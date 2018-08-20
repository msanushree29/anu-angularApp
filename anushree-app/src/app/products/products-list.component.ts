import { Component} from '@angular/core';
@Component({
selector:'app-list',
templateUrl:'./products-list.component.html'
})
export class ProductsListComponent{

pageTitle:string ="Product List"
listFilter: string ='cart'
imageWidth:number=50;
imageMargin:number=2;
showImage:boolean=false;
products: any[]=[{
    "productId":2,
    "productName":"Garden Cart",
    "productCode":"GDN-0023",
    "releaseDate":"March 18. 2016",
    "description":"15 gallon capacity",
    "price":32.99,
    "starRating":4.2,
"imageUrl":"https://openclipart.org/image/200px/svg_to_png/58471/garden-cart.png" 
},
{
    "productId":4,
    "productName":"Hammer",
    "productCode":"PKU-0023",
    "releaseDate":"March 18. 2016",
    "description":"15 gallon capacity",
    "price":22.99,
    "starRating":3.6,
    "imageUrl":"https://openclipart.org/image/200px/svg_to_png/14358/mystica-Hammer.png",
}]

toggleImage():void{
    this.showImage=!this.showImage;
}
}