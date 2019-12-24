import { Component, OnInit } from '@angular/core';
import { NareshService } from 'src/app/naresh.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service2:NareshService) { }
  cartarray=[]
  sum=0
  ngOnInit() {
    this.cartarray=Object.values(this.service2.cartitems)
    this.getsum()
  }
  getsum(){
    this.sum = 0;
    for(let i=0;i<this.cartarray.length;i++){
      this.sum += this.cartarray[i].price*this.cartarray[i].quantity;
    }
  }
  plus(itemid2){
    this.service2.cartitems[itemid2].quantity += 1
    this.cartarray = Object.values(this.service2.cartitems);
    this.getsum()
  }
  minus(itemid1){
    if(this.service2.cartitems[itemid1].quantity>1){
      this.service2.cartitems[itemid1].quantity -= 1
    }else{
      delete this.service2.cartitems[itemid1];
    }
    this.cartarray = Object.values(this.service2.cartitems);
    this.getsum()
  }
  clear(){
    for (let element in this.service2.cartitems) {
      delete this.service2.cartitems[element];
  }
    this.cartarray = Object.values(this.service2.cartitems);
  }
}
