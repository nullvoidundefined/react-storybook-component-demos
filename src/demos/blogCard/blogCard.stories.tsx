import type { Meta, StoryObj } from '@storybook/react-vite';

import { BlogCard } from './blogCard';
import { mockBlog } from './blogCard.data';

const meta = {
  title: 'Acme/Demos/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tags: { control: 'object' },
  },
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...mockBlog,
  },
};

export const SingleTag: Story = {
  args: {
    ...mockBlog,
    tags: [mockBlog.tags[0]],
  },
};

export const LongContent: Story = {
  args: {
    ...mockBlog,
    title:
      'This is a much longer blog title that should test how the card handles text overflow gracefully',
    description:
      'This is a significantly longer description that tests how the blog card handles overflow. In real-world applications, blog descriptions can vary greatly in length, and the card should gracefully handle both short and long content without breaking the layout or causing visual issues. The line clamp should truncate this text.',
  },
};

export const WithoutReadTime: Story = {
  args: {
    ...mockBlog,
    readTime: undefined,
  },
};
