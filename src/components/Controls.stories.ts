import type { Meta, StoryObj } from '@storybook/react';

import { Controls } from "./Controls";
const meta = {
  title: 'Controls',
  component: Controls,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Controls>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    targetWeight: 45,
    handleChange: (e) => console.log('value is ' + e.target.value)
  },
};
