import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'admin',
    // component: ProductsComponent,
    canActivate: [adminGuard],
    children: [
      { path: '', component: ProductsComponent },
      {
        path: 'products',
        component: ProductsComponent,
      },
      { path: 'products/add', component: AddProductComponent },
      {
        path: 'products/:id/edit',
        component: UpdateProductComponent,
      },
    ],
  },
];
