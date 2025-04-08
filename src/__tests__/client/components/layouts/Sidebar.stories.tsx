import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Sidebar from '../../../../client/components/layouts/Sidebar'; // adjust path accordingly

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen', // Sidebar is typically full-screen modal-style
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper to control Sidebar visibility for the story
const SidebarWrapper = ({ onClose }: { onClose: () => void }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 m-4 bg-blue-500 text-white rounded"
      >
        Open Sidebar
      </button>
      {open && <Sidebar onClose={() => setOpen(false)} />}
    </>
  );
};

export const Default: Story = {
    args: {
      onClose: () => console.log('Sidebar closed'),
    },
    render: (args) => <SidebarWrapper onClose={args.onClose} />,
  };
