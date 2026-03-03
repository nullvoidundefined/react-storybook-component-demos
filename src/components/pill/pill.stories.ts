import type { Meta, StoryObj } from '@storybook/react-vite';

import { Pill } from './pill';

const meta = {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['blueberry', 'tangerine', 'cherry', 'grape', 'mango', 'raspberry'],
    },
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallBlueberry: Story = {
  args: {
    size: 'sm',
    variant: 'blueberry',
    text: 'Blueberry',
  },
};

export const MediumMango: Story = {
  args: {
    size: 'md',
    variant: 'mango',
    text: 'Mango',
  },
};

export const LargeCherry: Story = {
  args: {
    size: 'lg',
    variant: 'cherry',
    text: 'Cherry',
  },
};
