import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductsComponent } from './user-dashcoard/products/products.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
 {path:'products', component:ProductsComponent},
 {path:'cart', component: CartComponent},

 {path:'', component: LandingPageComponent},
 {path:'user-register', component: UserRegisterComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
