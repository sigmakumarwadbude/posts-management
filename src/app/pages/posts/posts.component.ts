import { Component, OnInit } from '@angular/core';
import { POSTS } from 'src/app/data/posts';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  pageTitle = "Post List";
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  posts = POSTS;
  filteredPosts: Post[] = [];
  private _listFilter = "";

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value.trim();
    this.filteredPosts = this.perfomFilter(this.listFilter)
  }


  constructor() { }

  ngOnInit(): void {
    this.listFilter = "ang";
  }

  perfomFilter(filterBy: string) {
    return this.posts.filter(p => p.title.toLocaleLowerCase().includes(filterBy.toLocaleLowerCase()))
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onClickLikes(postId: number) {
    console.log(postId);
  }
}
