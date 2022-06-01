import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatMenuModule
} from '@angular/material/menu';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatSidenavModule
} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatListModule} from '@angular/material/list';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ProductsComponent } from './user-dashcoard/products/products.component';
import { CartComponent } from './cart/cart.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    ProductsComponent,
    CartComponent,
    UserRegisterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule]
})
export class AppModule { }
