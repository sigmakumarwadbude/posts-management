import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  pageTitle = "Post List";
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  private _listFilter = "";

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value.trim();
    this.filteredPosts = this.perfomFilter(this.listFilter)
  }


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe({
        next: posts => {
          this.posts = posts;
          this.listFilter = "";
        }
      })
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
