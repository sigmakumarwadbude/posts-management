import { Post } from "../model/post";


export const POSTS: Post[] = [
  {
    id: 1,
    title: 'Angular Fundamentals',
    author: 'John Smith',
    publishedAt: '2026-01-15',
    rating: 5,
    imageUrl: 'assets/images/angular-fundamentals.jpg'
  },
  {
    id: 2,
    title: 'Learning TypeScript',
    author: 'Jane Doe',
    publishedAt: '2026-02-10',
    rating: 4,
    imageUrl: 'assets/images/typescript.jpg'
  },
  {
    id: 3,
    title: 'RxJS in Angular',
    author: 'David Brown',
    publishedAt: '2026-03-05',
    rating: 5,
    imageUrl: 'assets/images/rxjs.jpg'
  },
  {
    id: 4,
    title: 'Modern Web Development',
    author: 'Sarah Wilson',
    publishedAt: '2026-04-20',
    rating: 3,
    imageUrl: 'assets/images/web-development.jpg'
  }
];