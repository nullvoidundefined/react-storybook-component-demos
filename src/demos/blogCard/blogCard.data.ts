import type { Blog } from './blogCard.types';
import ImageSrc from './blog-card-image.webp';

export const mockBlog: Blog = {
  author: 'John Doe',
  category: 'Technology',
  date: '2026-03-03',
  description: 'Blog Description',
  image: ImageSrc,
  readTime: '5 min read',
  tags: [
    {
      variant: 'blueberry',
      displayName: 'Technology',
    },
    {
      variant: 'tangerine',
      displayName: 'Science',
    },
    {
      variant: 'cherry',
      displayName: 'Innovation',
    },
  ],
  title: 'Blog Title',
};
