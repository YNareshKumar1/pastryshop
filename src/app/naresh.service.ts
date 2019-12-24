import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NareshService {

  constructor() { }
cartitems={}
image1="/assets/CB-99.jpg"
image2="/assets/CB-322.jpg"
image3="/assets/CB-509.jpg"
image4="/assets/CB-514.jpg"
image5="/assets/Chocolate-Drip.jpg"
image6="/assets/Ice-Cream-Cake.jpg"
image7="/assets/Pastel-Confetti.jpg"
image8="/assets/Rosette-Cake.jpg"
image14="/assets/Chocolate-Caramel.jpg"
image9="/assets/Chocolate-Chocolate.jpg"
image10="/assets/Chocolate-Ganache.jpg"
image11="/assets/Chocolate-Mint.jpg"
image12="/assets/Chocolate-Mocha.jpg"
image13="/assets/Chocolate-Peanut-Buttercream.jpg"
image15="/assets/Chocolate-Raspberry.jpg"
image16="/assets/Chocolate-Vanilla.jpg"
image17="/assets/Coconut-Creamcheese.jpg"
image18="/assets/Keylime-Creamcheese.jpg"
image19="/assets/Lemon-Lemon.jpg"
image20="/assets/Double-Chocolate.jpg"
image21="/assets/Double-Chocolate-Mocha.jpg"
image22="/assets/German-Chocolate.jpg"
image23="/assets/Custom-Cupcake1.jpg"
image24="/assets/Custom-Cupcake2.jpg"
pasrty_list={
    "p101":{id:"p101",image:this.image1,name:"CB-99 Children cake",price:800,weight:"500gms",quantity:1},
    "p102":{id:"p102",image:this.image2,name:"CB-322 Children cake",price:700,weight:"500gms",quantity:1},
    "p103":{id:"p103",image:this.image3,name:"CB-509 Children cake",price:850,weight:"500gms",quantity:1},
    "p104":{id:"p104",image:this.image4,name:"CB-514 Children cake",price:900,weight:"500gms",quantity:1},
    "p105":{id:"p105",image:this.image5,name:"Chocolate-Drip cake",price:1100,weight:"1000gms",quantity:1},
    "p106":{id:"p106",image:this.image6,name:"Ice-Cream-Cake",price:650,weight:"500gms",quantity:1},
    "p107":{id:"p107",image:this.image7,name:"Pastel-Confetti cake",price:900,weight:"500gms",quantity:1},
    "p108":{id:"p108",image:this.image8,name:"Rosette-Cake",price:750,weight:"1000gms",quantity:1},
    "p109":{id:"p109",image:this.image9,name:"Chocolate-Chocolate",price:35,weight:"100gms",quantity:1},
    "p110":{id:"p110",image:this.image10,name:"Chocolate-Ganache",price:45,weight:"100gms",quantity:1},
    "p111":{id:"p111",image:this.image11,name:"Chocolate-Mint",price:30,weight:"50gms",quantity:1},
    "p112":{id:"p112",image:this.image12,name:"Chocolate-Mocha",price:30,weight:"50gms",quantity:1},
    "p113":{id:"p113",image:this.image13,name:"Chocolate-Peanut-Buttercream",price:40,weight:"50gms",quantity:1},
    "p114":{id:"p114",image:this.image14,name:"Chocolate-Caramel",price:50,weight:"50gms",quantity:1},
    "p115":{id:"p115",image:this.image15,name:"Chocolate-Raspberry",price:30,weight:"100gms",quantity:1},
    "p116":{id:"p116",image:this.image16,name:"Chocolate-Vanilla",price:35,weight:"50gms",quantity:1},
    "p117":{id:"p117",image:this.image17,name:"Coconut-Creamcheese",price:45,weight:"50gms",quantity:1},
    "p118":{id:"p118",image:this.image18,name:"Keylime-Creamcheese",price:55,weight:"100gms",quantity:1},
    "p119":{id:"p119",image:this.image19,name:"Lemon-Lemon",price:35,weight:"100gms",quantity:1},
    "p120":{id:"p120",image:this.image20,name:"Double-Chocolate",price:75,weight:"50gms",quantity:1},
    "p121":{id:"p121",image:this.image21,name:"Double-Chocolate-Mocha",price:65,weight:"50gms",quantity:1},
    "p122":{id:"p122",image:this.image22,name:"German-Chocolate",price:70,weight:"50gms",quantity:1},
    "p123":{id:"p123",image:this.image23,name:"Custom-Cupcake1",price:85,weight:"50gms",quantity:1},
    "p124":{id:"p124",image:this.image24,name:"Custom-Cupcake2",price:40,weight:"50gms",quantity:1},
  }
}
