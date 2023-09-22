import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthenticationComponent } from './auth/authentication.component';
import { AuthenticationGuard } from './auth/authentication.guard';


import { BaselComponent } from './basel/basel.component';
import { CreateComponent } from './childc/create/create.component';
import { DetailComponent } from './childc/detail/detail.component';
import { UpdateComponent } from './childc/update/update.component';



const routes: Routes = [

  { path: "detail", component: DetailComponent },
  { path: "basel", component: BaselComponent },
  { path: "update", component: UpdateComponent },
  { path: "create", component: CreateComponent },
  { path: "", component: BaselComponent },
  { path: "login", component: AuthenticationComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes) , AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// const routes: Routes = [
//   { path: "table", component: ProductTableComponent },
//   { path: "detail", component: ProductDetailComponent },
//   { path: "detail/:id", component: ProductDetailComponent },
//   { path: "", component: ProductTableComponent },
//   { path: "login", component: AuthenticationComponent },
//   {
//     path: "", component: ProductTableComponent,
//     canActivateChild: [AuthenticationGuard],
//     children: [
//       { path: "products", component: ProductTableComponent },
//       { path: "orders", component: ProductTableComponent },
//       { path: "overview", component: ProductTableComponent },
//       { path: "", component: ProductTableComponent }
//     ]
//   }
// ];
