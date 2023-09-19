import type { Meta, StoryObj } from '@storybook/react';

import { Display } from "./Display";
const meta = {
  title: 'Display',
  component: Display,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Display>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    targetWeight: 45,
  },
};

export const Lowest: Story = {
  args: {
    targetWeight: 45 + (2.5) * 2,
  },
};

export const Five: Story = {
  args: {
    targetWeight: 45 + (5) * 2,
  },
};

export const Ten: Story = {
  args: {
    targetWeight: 45 + (10) * 2,
  },
};

export const TwentyFive: Story = {
  args: {
    targetWeight: 45 + (25) * 2,
  },
};

export const ThirtyFive: Story = {
  args: {
    targetWeight: 45 + (35) * 2,
  },
};

export const FortyFive: Story = {
  args: {
    targetWeight: 45 + (45) * 2,
  },
};

export const Varies: Story = {
  args: {
    targetWeight: 45 + (45 + 35 + 25 + 10 + 5 + 2.5) * 2,
  },
};

export const Full: Story = {
  args: {
    targetWeight: 900,
  },
};
