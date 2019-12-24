import { Component, OnInit } from '@angular/core';
import { NareshService } from 'src/app/naresh.service';

@Component({
  selector: 'app-pastrylist',
  templateUrl: './pastrylist.component.html',
  styleUrls: ['./pastrylist.component.css']
})
export class PastrylistComponent implements OnInit {

  constructor(private service:NareshService) { }
  itemlist=[]
  ngOnInit() {
          this.itemlist=Object.values(this.service.pasrty_list)
  }
  addtocart(item1){
    if(this.service.cartitems.hasOwnProperty(item1.id)){
           this.service.cartitems[item1.id].quantity+=1
    }else{
            this.service.cartitems[item1.id]=item1
    }
  }
}
