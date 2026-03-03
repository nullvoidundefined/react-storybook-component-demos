import type { Color } from '../../types/colors';

export type Tag = {
  variant: Color;
  displayName: string;
};

export type Blog = {
  author: string;
  category: string;
  date: string;
  description: string;
  image: string;
  readTime: string;
  tags: Tag[];
  title: string;
};

export type BlogCardProps = {
  author: string;
  category: string;
  className?: string;
  date: string;
  description: string;
  image: string;
  imageAlt?: string;
  readTime?: string;
  tags: Tag[];
  title: string;
};
