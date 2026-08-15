import { Post } from "../model/post";


export const POSTS: Post[] = [
  {
    id: 1,
    title: 'Angular Fundamentals',
    author: 'John Smith',
    publishedAt: '2026-01-15',
    likes: 500,
    imageUrl: 'assets/images/angular-fundamentals.jpg',
    category: ['Angular', 'Frontend']
  },
  {
    id: 2,
    title: 'Learning TypeScript',
    author: 'Jane Doe',
    publishedAt: '2026-02-10',
    likes: 400000000000,
    imageUrl: 'assets/images/typescript.jpg',
    category: ['TypeScript', 'Programming']
  },
  {
    id: 3,
    title: 'RxJS in Angular',
    author: 'David Brown',
    publishedAt: '2026-03-05',
    likes: 500000000,
    imageUrl: 'assets/images/rxjs.jpg',
    category: ['RxJS', 'Angular', 'Reactive Programming']
  },
  {
    id: 400,
    title: 'Modern Web Development',
    author: 'Sarah Wilson',
    publishedAt: '2026-04-20',
    likes: 300000,
    imageUrl: 'assets/images/web-development.jpg',
    category: ['Web Development', 'Frontend']
  }
];