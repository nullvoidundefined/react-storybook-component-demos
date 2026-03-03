import type { ComponentType } from 'react';
import type { Meta } from '@storybook/react-vite';

import { Text } from './text';
import { textClassNames, type TextClassName } from './text.types';

const TextDemo = () => (
  <>
    {textClassNames.map((textClassName: TextClassName) => (
      <div key={textClassName}>
        <Text textClassName={textClassName}>{textClassName}</Text>
        <div style={{ marginBottom: '8px' }} />
      </div>
    ))}
  </>
);

const meta: Meta<typeof Text> = {
  title: 'Acme/Text',
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
