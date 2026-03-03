import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BlogCard } from './blogCard';
import type { BlogCardProps } from './blogCard.types';

const defaultProps: BlogCardProps = {
  title: 'Test Blog Post',
  description: 'A short description of the blog post.',
  image: 'https://example.com/image.webp',
  date: '2026-03-03',
  author: 'Jane Doe',
  category: 'Technology',
  tags: [
    { variant: 'blueberry', displayName: 'React' },
    { variant: 'cherry', displayName: 'Testing' },
  ],
};

describe('BlogCard', () => {
  it('renders as an article', () => {
    render(<BlogCard {...defaultProps} />);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<BlogCard {...defaultProps} />);
    expect(screen.getByRole('heading', { name: 'Test Blog Post' })).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<BlogCard {...defaultProps} />);
    expect(screen.getByText('A short description of the blog post.')).toBeInTheDocument();
  });

  it('renders the image with alt text from imageAlt', () => {
    render(<BlogCard {...defaultProps} imageAlt="Custom alt" />);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Custom alt');
  });

  it('falls back to title for image alt when imageAlt is not provided', () => {
    render(<BlogCard {...defaultProps} />);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test Blog Post');
  });

  it('renders a formatted date in a time element', () => {
    render(<BlogCard {...defaultProps} />);
    const time = screen.getByText('March 3, 2026');
    expect(time.tagName).toBe('TIME');
    expect(time).toHaveAttribute('datetime', '2026-03-03');
  });

  it('renders the author', () => {
    render(<BlogCard {...defaultProps} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('renders the category', () => {
    render(<BlogCard {...defaultProps} />);
    expect(screen.getByText('Technology')).toBeInTheDocument();
  });

  it('renders tags as pills', () => {
    render(<BlogCard {...defaultProps} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Testing')).toBeInTheDocument();
  });

  it('does not render tags section when tags array is empty', () => {
    render(<BlogCard {...defaultProps} tags={[]} />);
    expect(screen.queryByText('React')).not.toBeInTheDocument();
  });

  it('renders readTime when provided', () => {
    render(<BlogCard {...defaultProps} readTime="5 min read" />);
    expect(screen.getByText('5 min read')).toBeInTheDocument();
  });

  it('does not render readTime when not provided', () => {
    render(<BlogCard {...defaultProps} />);
    expect(screen.queryByText(/min read/)).not.toBeInTheDocument();
  });

  it('merges additional className', () => {
    render(<BlogCard {...defaultProps} className="custom" />);
    expect(screen.getByRole('article')).toHaveClass('custom');
  });
});
