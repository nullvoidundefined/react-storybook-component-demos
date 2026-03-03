import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './text';

describe('Text', () => {
  it('renders children', () => {
    render(<Text variant="body1regular">Hello world</Text>);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('defaults to a span element', () => {
    render(<Text variant="body1regular">Default</Text>);
    expect(screen.getByText('Default').tagName).toBe('SPAN');
  });

  it('renders as the specified element via the "as" prop', () => {
    render(
      <Text as="h2" variant="header2">
        Heading
      </Text>,
    );
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('applies the variant class', () => {
    render(<Text variant="header1">Title</Text>);
    expect(screen.getByText('Title')).toHaveClass('acme-text--header1');
  });

  it('merges additional className', () => {
    render(
      <Text variant="body1regular" className="extra">
        Styled
      </Text>,
    );
    const el = screen.getByText('Styled');
    expect(el).toHaveClass('acme-text--body1regular');
    expect(el).toHaveClass('extra');
  });

  it('passes id to the rendered element', () => {
    render(
      <Text variant="body1regular" id="my-text">
        With ID
      </Text>,
    );
    expect(screen.getByText('With ID')).toHaveAttribute('id', 'my-text');
  });

  it('passes inline style to the rendered element', () => {
    render(
      <Text variant="body1regular" style={{ color: 'red' }}>
        Red text
      </Text>,
    );
    expect(screen.getByText('Red text').style.color).toBe('red');
  });

  it('passes the title attribute', () => {
    render(
      <Text variant="body1regular" title="tooltip">
        Hover me
      </Text>,
    );
    expect(screen.getByText('Hover me')).toHaveAttribute('title', 'tooltip');
  });
});
