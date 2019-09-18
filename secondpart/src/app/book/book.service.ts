import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookLt = new Subject();
  
  private booklist:Book[];
  
  
  constructor() {
    this.booklist = [
      new Book('jaws',300,'long description of half girl friend novel','peter Benchley','https://media1.popsugar-assets.com/files/thumbor/GD60tXqFF5-DncD99uD_j-Hvp1k/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/11/12/985/n/1922283/32be03105bea00f0969de5.49967920_/i/Novels-Based-True-Stories.jpg'),
      new Book('halfgirlfriend',250,'long description of half girl friend novel ','chetan bhagat','https://images-na.ssl-images-amazon.com/images/I/51IpHUkHttL._SX326_BO1,204,203,200_.jpg'),
      new Book('Harry Potter Chamer of Secret',700,'long description of half girl friend novel','J.k. RowLings','https://kbimages1-a.akamaihd.net/645388ae-94f7-41fe-8416-f3929f43414f/353/569/90/False/harry-potter-and-the-chamber-of-secrets-5.jpg'),
      new Book('the book of God',800,'long description of half girl friend novel','Walter','https://images.gr-assets.com/books/1328847563l/965733.jpg'),
      new Book('A thousand splendid suns',390,'long description of half girl friend novel','Khaled hosseini','https://jamesclear.com/wp-content/uploads/2017/04/A-Thousand-Splendid-Suns-by-Khaled-Hosseini-456x700.gif'),
      new Book('scribe',450,'long description of half girl friend novel','Metthew Guinn','https://www.daedalusbooks.com/graphics/products/regular/D80165.jpg'),
      new Book('you must be brave',200,'long description of half girl friend novel','Frances Liardet','https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1556052668-418uvaLQDjL.jpg')
    ];
   }
  
  getBookList(){
    return [...this.booklist]; 
  }
  setBook(book:Book){
    this.booklist.push(book);
    this.bookLt.next([...this.booklist]);
  }
  bookListerner(){
    return this.bookLt.asObservable();
  }
  getBookById(index:number){
    return this.booklist[index];
  }
}
