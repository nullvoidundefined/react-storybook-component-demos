import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { createRef } from 'react';
import { Header } from './header';

describe('Header', () => {
  it('renders the Acme brand name', () => {
    render(<Header id="header" />);
    expect(screen.getByRole('heading', { name: 'Acme' })).toBeInTheDocument();
  });

  describe('logged-out state', () => {
    it('shows Log in and Sign up buttons when no user is provided', () => {
      render(<Header id="header" />);
      expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument();
    });

    it('does not show Log out button when no user is provided', () => {
      render(<Header id="header" />);
      expect(screen.queryByRole('button', { name: 'Log out' })).not.toBeInTheDocument();
    });

    it('calls onLogin when Log in is clicked', async () => {
      const handleLogin = vi.fn();
      render(<Header id="header" onLogin={handleLogin} />);
      await userEvent.click(screen.getByRole('button', { name: 'Log in' }));
      expect(handleLogin).toHaveBeenCalledOnce();
    });

    it('calls onCreateAccount when Sign up is clicked', async () => {
      const handleCreateAccount = vi.fn();
      render(<Header id="header" onCreateAccount={handleCreateAccount} />);
      await userEvent.click(screen.getByRole('button', { name: 'Sign up' }));
      expect(handleCreateAccount).toHaveBeenCalledOnce();
    });
  });

  describe('logged-in state', () => {
    it('shows welcome message with user name', () => {
      render(<Header id="header" user={{ name: 'Jane Doe' }} />);
      expect(screen.getByText(/Welcome,/)).toBeInTheDocument();
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });

    it('shows Log out button when user is provided', () => {
      render(<Header id="header" user={{ name: 'Jane Doe' }} />);
      expect(screen.getByRole('button', { name: 'Log out' })).toBeInTheDocument();
    });

    it('does not show Log in or Sign up buttons when user is provided', () => {
      render(<Header id="header" user={{ name: 'Jane Doe' }} />);
      expect(screen.queryByRole('button', { name: 'Log in' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Sign up' })).not.toBeInTheDocument();
    });

    it('calls onLogout when Log out is clicked', async () => {
      const handleLogout = vi.fn();
      render(<Header id="header" user={{ name: 'Jane Doe' }} onLogout={handleLogout} />);
      await userEvent.click(screen.getByRole('button', { name: 'Log out' }));
      expect(handleLogout).toHaveBeenCalledOnce();
    });
  });

  it('forwards ref to the underlying header element', () => {
    const ref = createRef<HTMLElement>();
    render(<Header id="header" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName).toBe('HEADER');
  });
});
