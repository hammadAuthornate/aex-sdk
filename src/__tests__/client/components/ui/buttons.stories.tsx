import type { Meta, StoryObj } from '@storybook/react';
import ThemeBlue from '../../../../client/components/ui/buttons'; // Adjust this path based on your folder structure

const meta = {
  title: 'Components/ThemeBlueButton',
  component: ThemeBlue,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeBlue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Click Me',
    event: () => alert('Button clicked!'),
  },
};
