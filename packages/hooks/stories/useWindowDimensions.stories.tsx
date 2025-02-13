import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useWindowDimensions } from '..';

const ListenerComponent = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div>
      {' '}
      Current Window Dimensions: height: {height}, width: {width}
    </div>
  );
};

export default {
  title: 'Hooks/useWindowDimensions',
  parameters: {
    docs: {},
  },
} as Meta;

export const Default: Story = () => <ListenerComponent />;
Default.storyName = 'default';
