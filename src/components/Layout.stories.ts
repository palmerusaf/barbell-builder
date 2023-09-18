import type { Meta, StoryObj } from '@storybook/react';

import { Layout, Controls, Title, Display } from "./Layout";

const meta = {
  title: 'Layout',
  component: Layout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: Title(),
    display: Display(),
    controls: Controls(),
  },
};
