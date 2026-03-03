import clsx from 'clsx';
import styles from './blogCard.module.scss';
import { Pill, Text } from '../../index';
import type { BlogCardProps } from './blogCard.types';

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(iso));

export const BlogCard = ({
  title,
  description,
  image,
  imageAlt,
  date,
  author,
  category,
  tags,
  readTime,
  className,
}: BlogCardProps) => {
  return (
    <article className={clsx(styles.container, className)}>
      <img src={image} alt={imageAlt ?? title} className={styles.image} />
      <div className={styles.content}>
        <Text as="h3" variant="header3">
          {title}
        </Text>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Pill variant={tag.variant} text={tag.displayName} size="sm" key={tag.displayName} />
            ))}
          </div>
        )}
        <Text as="p" variant="body2regular" className={styles.description}>
          {description}
        </Text>
        <footer className={styles.footer}>
          <Text variant="body3regular" className={styles.footerItem}>
            <time dateTime={date}>{formatDate(date)}</time>
          </Text>
          <Text variant="body3regular" className={styles.footerItem}>
            {author}
          </Text>
          <Text variant="body3regular" className={styles.footerItem}>
            {category}
          </Text>
          {readTime && (
            <Text variant="body3regular" className={styles.footerItem}>
              {readTime}
            </Text>
          )}
        </footer>
      </div>
    </article>
  );
};
