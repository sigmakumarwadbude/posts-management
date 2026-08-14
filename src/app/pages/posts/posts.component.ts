import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  pageTitle = "Post List";

  constructor() { }

  ngOnInit(): void {
  }

}
