import type React from 'react';
import styles from './button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: 'primary' | 'secondary' | 'warn' | 'danger';
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Unique id for the button element */
  id?: string;
  /** Ref forwarded to the underlying button element (React 19 ref-as-prop) */
  ref?: React.Ref<HTMLButtonElement>;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'secondary',
  size = 'medium',
  backgroundColor,
  children,
  disabled = false,
  type = 'button',
  className,
  id,
  ref,
  style,
  ...props
}: ButtonProps) => {
  const classNames = [styles.button, styles[size], styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      ref={ref}
      id={id}
      type={type}
      className={classNames}
      style={{ backgroundColor, ...style }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
