import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { PastrylistComponent } from './components/pastrylist/pastrylist.component';
import { TrackComponent } from './components/track/track.component';


const routes: Routes = [
    {path:"home", component: HomeComponent},
    {path:"cart",component:CartComponent},
    {path:"pastrylist",component:PastrylistComponent},
    {path:"track",component:TrackComponent}
    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
