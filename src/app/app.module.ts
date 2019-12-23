import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PastrylistComponent } from './components/pastrylist/pastrylist.component';
import { CartComponent } from './components/cart/cart.component';
import{FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TrackComponent } from './components/track/track.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PastrylistComponent,
    CartComponent,
    HeaderComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
