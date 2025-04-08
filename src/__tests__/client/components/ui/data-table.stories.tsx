import type { Meta, StoryObj } from '@storybook/react';
import Table from '../../../../client/components/ui/data-table'; // Adjust the import path as needed

const meta = {
  title: 'Components/DataTable',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onRowClick: (id: number) => alert(`Row with ID ${id} clicked`),
  },
};
