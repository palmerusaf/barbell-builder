import type { Meta, StoryObj } from '@storybook/react';

import * as Layout from "./Layout";
import { Title } from './Title';
import { Controls } from './Controls';

const meta = {
  title: 'Layout',
  component: Layout.Layout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Layout.Layout>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    title: Layout.Title(),
    display: Layout.Display(),
    controls: Layout.Controls(),
  },
};

export const WithTitle: Story = {
  args: {
    title: Title(),
    display: Layout.Display(),
    controls: Layout.Controls(),
  },
};

export const WithControls: Story = {
  args: {
    title: Layout.Title(),
    display: Layout.Display(),
    controls: Controls({ targetWeight: 45, handleChange: console.log }),
  },
};
