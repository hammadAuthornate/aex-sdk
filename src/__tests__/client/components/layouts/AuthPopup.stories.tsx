import type { Meta, StoryObj } from '@storybook/react';
import AuthPopup from '../../../../client/components/layouts/AuthPopup';

const meta = {
  title: 'Components/AuthPopup',
  component: AuthPopup,
  parameters: {
    layout: 'fullscreen', // best for modals/popups to see the backdrop effect
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AuthPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
