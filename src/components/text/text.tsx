import type React from 'react';
import clsx from 'clsx';

import styles from './text.module.scss';
import type { TextClassName } from './text.types';

export interface TextProps {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  textClassName: TextClassName;
  title?: string;
}

/** Polymorphic typography component for consistent text styling */
export const Text = ({
  as: Component = 'span',
  children,
  className,
  id,
  style,
  textClassName,
  title,
}: TextProps) => (
  <Component className={clsx(styles[textClassName], className)} id={id} style={style} title={title}>
    {children}
  </Component>
);
