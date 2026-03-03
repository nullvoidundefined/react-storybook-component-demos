import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Page } from './page';

describe('Page', () => {
  it('renders the article with the given id', () => {
    render(<Page id="test-page" />);
    expect(document.getElementById('test-page')).toBeInTheDocument();
  });

  it('renders a skip link to main content', () => {
    render(<Page id="test-page" />);
    const skipLink = screen.getByRole('link', { name: 'Skip to main content' });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders the main content section', () => {
    render(<Page id="test-page" />);
    expect(screen.getByRole('region', { name: 'Main content' })).toBeInTheDocument();
  });

  it('renders the header', () => {
    render(<Page id="test-page" />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('starts in logged-out state showing Log in and Sign up', () => {
    render(<Page id="test-page" />);
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument();
  });

  it('shows welcome message and Log out after clicking Log in', async () => {
    render(<Page id="test-page" />);
    await userEvent.click(screen.getByRole('button', { name: 'Log in' }));
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log out' })).toBeInTheDocument();
  });

  it('shows welcome message and Log out after clicking Sign up', async () => {
    render(<Page id="test-page" />);
    await userEvent.click(screen.getByRole('button', { name: 'Sign up' }));
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log out' })).toBeInTheDocument();
  });

  it('returns to logged-out state after clicking Log out', async () => {
    render(<Page id="test-page" />);
    await userEvent.click(screen.getByRole('button', { name: 'Log in' }));
    await userEvent.click(screen.getByRole('button', { name: 'Log out' }));
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
    expect(screen.queryByText('Jane Doe')).not.toBeInTheDocument();
  });
});
