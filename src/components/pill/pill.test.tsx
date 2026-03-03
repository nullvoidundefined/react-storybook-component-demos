import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Pill } from './pill';

describe('Pill', () => {
  it('renders the text prop', () => {
    render(<Pill variant="blueberry" text="Tag" />);
    expect(screen.getByText('Tag')).toBeInTheDocument();
  });

  it('renders as a span', () => {
    render(<Pill variant="blueberry" text="Span" />);
    expect(screen.getByText('Span').tagName).toBe('SPAN');
  });

  it('defaults to md size', () => {
    render(<Pill variant="blueberry" text="Medium" />);
    expect(screen.getByText('Medium')).toHaveClass('acme-pill--md');
  });

  it('applies the specified size class', () => {
    const { rerender } = render(<Pill variant="blueberry" text="Small" size="sm" />);
    expect(screen.getByText('Small')).toHaveClass('acme-pill--sm');

    rerender(<Pill variant="blueberry" text="Large" size="lg" />);
    expect(screen.getByText('Large')).toHaveClass('acme-pill--lg');
  });

  it('applies the variant class', () => {
    render(<Pill variant="cherry" text="Cherry" />);
    expect(screen.getByText('Cherry')).toHaveClass('acme-pill--cherry');
  });

  it('applies different variant classes', () => {
    const { rerender } = render(<Pill variant="tangerine" text="Tangerine" />);
    expect(screen.getByText('Tangerine')).toHaveClass('acme-pill--tangerine');

    rerender(<Pill variant="grape" text="Grape" />);
    expect(screen.getByText('Grape')).toHaveClass('acme-pill--grape');
  });

  it('merges additional className', () => {
    render(<Pill variant="blueberry" text="Extra" className="custom" />);
    const el = screen.getByText('Extra');
    expect(el).toHaveClass('acme-pill');
    expect(el).toHaveClass('custom');
  });

  it('spreads additional HTML attributes', () => {
    render(<Pill variant="blueberry" text="Accessible" data-testid="my-pill" />);
    expect(screen.getByTestId('my-pill')).toBeInTheDocument();
  });
});
