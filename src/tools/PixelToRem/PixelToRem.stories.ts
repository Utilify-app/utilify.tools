// src/components/PixelToRem.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import PixelToRem from './';

const meta: Meta<typeof PixelToRem> = {
  title: 'Tools/PixelToRem',
  component: PixelToRem,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PixelToRem>;

export const Default: Story = {};
