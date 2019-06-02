import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { UserService } from './services/user/user.service';
import { BookService } from './services/books/book.service';
import { CardService } from './services/card/card.service';
import { User } from './model/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 250,
      gap: 10
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    BookDetailComponent,
    ShopCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [UserService, BookService, CardService, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
