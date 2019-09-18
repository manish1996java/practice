import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  anyvar:String;
  constructor(private route:ActivatedRoute,private routes:Router) { }
  
  ngOnInit() {
    this.route.params.subscribe((path)=>{
      console.log(path);
    })
  }

}
