import type React from 'react';
import styles from './pill.module.scss';
import type { Size } from '../../types/dimensions';
import type { Color } from '../../types/colors';

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual size of the pill */
  size?: Size;
  /** Color variant of the pill, based on fruit colors */
  variant: Color;
  /** Text content of the pill */
  text: string;
}

export const Pill = ({ size = 'md', variant, text, className, ...rest }: PillProps) => {
  const classNames = [styles.pill, styles[size], styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} {...rest}>
      {text}
    </span>
  );
};
