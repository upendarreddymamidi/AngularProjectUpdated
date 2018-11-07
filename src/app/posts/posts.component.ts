import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute,RouterModule } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {


  posts$: Object;
  
  constructor(private data: DataService) { }

  ngOnclick() {
  
    this.data.getPosts().subscribe(
      data => this.posts$ = data 
    );


  }


}
