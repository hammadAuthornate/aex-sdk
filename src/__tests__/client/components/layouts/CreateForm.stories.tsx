import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import CreateForm from '../../../../client/components/layouts/CreateForm'; // adjust path if needed
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/CreateForm',
  component: CreateForm,
  parameters: {
    layout: 'fullscreen', // best for modals
  },
  tags: ['autodocs'],
  args: {
    onClose: fn(), // logs the close event in Storybook Actions panel
  },
} satisfies Meta<typeof CreateForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(true);

    if (!visible) return <p className="text-center mt-10">Form Closed</p>;

    return (
      <CreateForm
        {...args}
        onClose={() => {
          setVisible(false);
          args.onClose?.(); // trigger Storybook action logger
        }}
      />
    );
  },
};
