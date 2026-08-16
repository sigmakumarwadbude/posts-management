import { TestBed } from '@angular/core/testing';

import { PostDetailGuard } from './post-detail.guard';

describe('PostDetailGuard', () => {
  let guard: PostDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
