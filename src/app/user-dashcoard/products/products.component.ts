import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  theRandomNumber:any ="";
  
  item: Item={
    id: 0,
    price: 100,
    name: "tshirt"
};
  products:Product[]=[
    {
      id:1,
      sellingprice:120,
      baseprice:150,
      headline:"Mens navy kurta 123456 code-purchase",
      url:"https://scontent.fixc1-3.fna.fbcdn.net/v/t1.6435-9/188863123_319032443130267_8035559259652446128_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=106&ccb=1-7&_nc_sid=9e2e56&efg=eyJpIjoiYiJ9&_nc_ohc=Xv6w9j7ij-8AX_qBuqA&_nc_ht=scontent.fixc1-3.fna&oh=00_AT_3dWr5E7f63QU6oCjFKmxkZIJY6yQ9eW9FhAG_nfDO-w&oe=62B0A068"
    },
    {
      id:10,
      sellingprice:120,
      baseprice:150,
      headline:"Men`s Shirt",
      url:"www.besfit.com/imga.jpg"
    },
  ];
  constructor() { }

  ngOnInit(): void {
    this.watchingNow();
  }

  watchingNow()
  {
     this.theRandomNumber = Math.floor(Math.random() * 10) + 1;
     
  }

  addItem(value: string)
  {
   alert("test test");
  }
  

}
class Product {  
  id : number=0;  
  url : string="";  
  sellingprice : number=0;  
  baseprice : number=0;  
  headline:string ="";
} 
