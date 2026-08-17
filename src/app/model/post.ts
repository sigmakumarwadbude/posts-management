export interface Post {
  readonly id: number;
  readonly title: string;
  readonly author: string;
  readonly publishedAt: string;
  readonly likes: number;
  readonly categories: string[];
  readonly imageUrl?: string;
}
export type CreatePost = Omit<Post, 'id'>;
export type UpdatePost = Partial<Omit<Post, 'id'>>;
