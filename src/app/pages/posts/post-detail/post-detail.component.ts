import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent implements OnInit {
  pageTitle = "Product Details";
  post!: Post;
  errMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: params => {
        const id = Number(params.get('id'));
        this.loadPost(id);
      }
    })
  }

  onBack() {
    this.router.navigate(['/posts'])
  }
  onClickLikes(postId: number) {
    console.log(postId);
  }

  loadPost(id: number) {
    this.postService.getPostById(id).subscribe({
      next: post => this.post = post,
      error: err => this.errMessage = err
    })
  }
}
