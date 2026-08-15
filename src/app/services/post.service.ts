import { Injectable } from "@angular/core";
import { POSTS } from "../data/posts";

@Injectable({providedIn: 'root'})
export class PostService {
    posts = POSTS;

    getPosts() {
        return this.posts;
    }
}