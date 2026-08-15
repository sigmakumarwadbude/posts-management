import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
    selector: 'app-post-likes',
    template: `
    <button
        type="button"
        class="btn btn-outline-primary btn-sm"
        (click)="onLike()"
        >
        {{ likes | likes }}
    </button>
  `
})
export class PostLikesComponent {

    @Input() likes = 0;
    @Input() postId!: number;

    @Output() liked = new EventEmitter<number>();

    onLike(): void {
        this.liked.emit(this.postId);
    }


}