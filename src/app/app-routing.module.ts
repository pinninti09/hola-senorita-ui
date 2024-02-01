import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminblogComponent } from './adminblog/adminblog.component';
import { LoginComponent } from './auth/login/login.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { PostComponent } from './blog/post/post.component';

//import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './auth/register/register.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/my-best-blog', component: PostComponent },
  { path: 'admin/blog', component: AdminblogComponent },
  { path: 'books', component: BooksComponent },
  { path: 'cart', component: CartComponent },
//  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

