import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../model/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/books/book.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book ;
  books: Book[] = [];


  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    this.route.paramMap.subscribe(params => {
    this.book = this.books[+params.get('isbn')];
  });
    console.log(this.book);
  }

}
