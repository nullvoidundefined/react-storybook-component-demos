import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { createRef } from 'react';
import { Button } from './button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('defaults to secondary variant', () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole('button')).toHaveClass('acme-button--secondary');
  });

  it('applies the specified variant class', () => {
    render(<Button variant="primary">Submit</Button>);
    expect(screen.getByRole('button')).toHaveClass('acme-button--primary');
  });

  it('applies warn and danger variant classes', () => {
    const { rerender } = render(<Button variant="warn">Warn</Button>);
    expect(screen.getByRole('button')).toHaveClass('acme-button--warn');

    rerender(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole('button')).toHaveClass('acme-button--danger');
  });

  it('defaults to medium size', () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole('button')).toHaveClass('acme-button--md');
  });

  it('applies the specified size class', () => {
    const { rerender } = render(<Button size="sm">Submit</Button>);
    expect(screen.getByRole('button')).toHaveClass('acme-button--sm');

    rerender(<Button size="lg">Submit</Button>);
    expect(screen.getByRole('button')).toHaveClass('acme-button--lg');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is not disabled by default', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await userEvent.click(screen.getByRole('button', { name: 'Click me' }));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Click me' }));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies custom backgroundColor via inline style', () => {
    render(<Button backgroundColor="red">Submit</Button>);
    expect(screen.getByRole('button').style.backgroundColor).toBe('red');
  });

  it('merges consumer style prop with backgroundColor', () => {
    render(
      <Button backgroundColor="red" style={{ color: 'white' }}>
        Submit
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn.style.backgroundColor).toBe('red');
    expect(btn.style.color).toBe('white');
  });

  it('merges additional className', () => {
    render(<Button className="extra">Submit</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('acme-button');
    expect(btn).toHaveClass('extra');
  });

  it('defaults to type="button" to prevent form submission', () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('forwards ref to the underlying button element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
