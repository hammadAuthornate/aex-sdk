import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '../../../../client/components/layouts/Navbar'; // Adjust the path if necessary

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen', // Navbar usually spans the full width
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
