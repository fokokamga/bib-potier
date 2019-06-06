import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Book } from 'src/app/model/book';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  urlBook = 'http://henri-potier.xebia.fr/books';
  private books: Book[];

  constructor(private http: HttpClient,
  ) { }

  getAllBooks(): Observable<Book[]> {
    const url = this.urlBook;
    return this.http.get<Book[]>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Book[]>('getAllBooks', []))
      );
  }

  searchBook(): Observable<Book[]> {
    const urlSearch = this.urlBook;
    return this.http.get<Book[]>(urlSearch, httpOptions);

  }


  getBookById(isbn: string) {
    const urlbyid = `${this.urlBook}/${isbn}`;
    return this.http.get<Book>(urlbyid, httpOptions)
    .pipe(
      catchError(this.handleError<Book>(`getBook id=${isbn}`))
    );

  }




  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //  this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a BookService message with the MessageService */
  /*private log( message: string) {
    this.messageService.add(`BookService: ${message}`);
  }*/
}
