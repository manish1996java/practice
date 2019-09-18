import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-edit-list-item',
  templateUrl: './book-edit-list-item.component.html',
  styleUrls: ['./book-edit-list-item.component.css']
})
export class BookEditListItemComponent implements OnInit {
  @Input() book:Book;
  constructor() { }

  ngOnInit() {
    
  }

}
