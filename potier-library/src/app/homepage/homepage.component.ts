import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Book } from '../model/book';
import { BookService } from '../services/books/book.service';
import { HttpClient } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  errorMessage: string;
  myFirstName: string;
  myLastName: string;

  filteredBooks: Book[];
  books: Book[] = [];
  // tslint:disable-next-line:variable-name
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
  }


  constructor(private userService: UserService,
              private bookService: BookService
  ) { }

  ngOnInit() {
    this.getAllBooks();
    this.myFirstName = this.userService.getFirstName();
    this.myLastName = this.userService.getLastName();
  }

  performFilter(filterBy: string): Book[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((book: Book) =>
      book.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  getAllBooks(): void {
    this.bookService.getAllBooks()
      .subscribe(books => {
        this.books = books;
        this.filteredBooks = this.books;
      },
        error => this.errorMessage = error as any);
  }



}
