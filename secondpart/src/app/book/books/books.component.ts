import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  length = 100;
  pageSize = 16;
  pageOption:number[] = [10,20,30,40,50];
  cardlist:number[] = [1,2,3,4,5,6,7,8,9];
  booklist:Book[];

  constructor(private booksvc:BookService) { }

  ngOnInit() {
       this.booklist = this.booksvc.getBookList();
       this.booksvc.bookListerner().subscribe((bList:Book[])=>{
          this.booklist = bList;  
       })
  }

}
