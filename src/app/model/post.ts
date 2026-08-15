export interface Post {
  readonly id: number;
  readonly title: string;
  readonly author: string;
  readonly publishedAt: string;
  readonly rating: number;
  readonly imageUrl?: string;
}
export type CreatePost = Omit<Post, 'id'>;
export type UpdatePost = Partial<Omit<Post, 'id'>>;
