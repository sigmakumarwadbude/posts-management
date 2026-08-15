import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { POSTS } from "../data/posts";
import { Post } from "../model/post";

@Injectable({providedIn: 'root'})
export class PostService {
    postUrl = '/api/posts';
    posts = POSTS;

    constructor(private http: HttpClient) {}
    getPosts() {
        return this.http.get<Post[]>(this.postUrl);
    }

    
}