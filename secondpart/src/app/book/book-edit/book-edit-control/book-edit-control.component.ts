import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-edit-control',
  templateUrl: './book-edit-control.component.html',
  styleUrls: ['./book-edit-control.component.css']
})
export class BookEditControlComponent implements OnInit {

  form:FormGroup;
  constructor(private booksvc:BookService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'title':new FormControl('',[Validators.required]),
      'price':new FormControl('',[Validators.required]),
      'description':new FormControl('',[Validators.required]),
      'url': new FormControl('',[Validators.required]),
      'authorName': new FormControl('',[Validators.required])
    })

    console.log(this.form);
  }

  onSubmit(){
    const title = this.form.get('title').value;
    const price = this.form.get('price').value;
    const description = this.form.get('description').value;
    const url = this.form.get('url').value;
    const author = this.form.get('authorName').value;
    this.booksvc.setBook(new Book(title,price,description,author,url));
    
  }

}
