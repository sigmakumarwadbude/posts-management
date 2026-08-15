import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { POSTS } from "../data/posts";
import { Post } from "../model/post";
import { catchError, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostService {
    postUrl = '/api/posts';
    posts = POSTS;

    constructor(private http: HttpClient) {}
    getPosts() {
        return this.http.get<Post[]>(this.postUrl)
            .pipe(catchError(this.handleError))
    }

    handleError(err: HttpErrorResponse) {
        const message = err.error instanceof ErrorEvent ? err.error.message : err.message;
        return throwError(() => message);
    }
}