import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/books/book.service';
import { Item } from './../model/item';
import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import { CardService } from '../services/card/card.service';
import { Book } from '../model/book';


@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {
 items;


  constructor(private cardService: CardService,
              private activatedRoute: ActivatedRoute,
              private bookService: BookService) {
                this.items = this.cardService.getItems();
  }

  ngOnInit() {
    localStorage.getItem(this.items);

  }



}
