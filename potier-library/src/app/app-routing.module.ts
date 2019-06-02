import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ShopCardComponent } from './shop-card/shop-card.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'books', component: HomepageComponent },
  { path: 'books/id', component: BookDetailComponent },
  { path: 'card-recap', component: ShopCardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
