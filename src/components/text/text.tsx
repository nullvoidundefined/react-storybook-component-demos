import type React from 'react';
import clsx from 'clsx';

import styles from './text.module.scss';
import type { TextVariant } from './text.types';

export interface TextProps {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  variant: TextVariant;
  title?: string;
}

/** Polymorphic typography component for consistent text styling */
export const Text = ({
  as: Component = 'span',
  children,
  className,
  id,
  style,
  variant,
  title,
}: TextProps) => (
  <Component className={clsx(styles[variant], className)} id={id} style={style} title={title}>
    {children}
  </Component>
);
