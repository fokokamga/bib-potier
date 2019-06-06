export class Book {
    isbn: string;
    title: string;
    price: string;
    cover: string;
    synopsis: Array<string>;

    // methodes getter setter

    getIsbn(): string {
        return this.isbn;
    }
    getTitle(): string {
        return this.title;
    }
    getPrice(): string {
        return this.price;
    }
    getCover(): string {
        return this.cover;
    }
    getSynopsis(): Array<string> {
        return this.synopsis;
    }
}
