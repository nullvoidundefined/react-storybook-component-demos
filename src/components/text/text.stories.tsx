import type { ComponentType } from 'react';
import type { Meta } from '@storybook/react-vite';

import { Text } from './text';
import { textVariants, type TextVariant } from './text.types';

const TextDemo = () => (
  <>
    {textVariants.map((textVariant: TextVariant) => (
      <div key={textVariant}>
        <Text variant={textVariant}>{textVariant}</Text>
        <div style={{ marginBottom: '8px' }} />
      </div>
    ))}
  </>
);

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  decorators: [
    (Story: ComponentType) => (
      <div style={{ padding: '2rem', width: '100%', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const AllVariants = {
  render: () => <TextDemo />,
};
