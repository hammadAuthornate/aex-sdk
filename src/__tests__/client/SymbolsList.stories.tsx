import React from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import Table from '../../client/components/SymbolsList'; // Assuming the path is correct


// Define the meta configuration for the Table component
const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered', // Center the component in the Storybook canvas
  },
  tags: ['autodocs'], // Enable autodocs if needed
  argTypes: {
    onRowClick: {
      action: 'clicked', // Logs row clicks in the Storybook's action panel
      description: 'Function to call when a row is clicked',
    },
    data: {
      description: 'Data to display in the table',
      control: 'object', // Control the data prop through the Storybook UI
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample data for the table
const sampleData = [
  { symbol: 'AAPL', price: '$150', exchange: 'NASDAQ' },
  { symbol: 'GOOGL', price: '$2800', exchange: 'NASDAQ' },
  { symbol: 'AMZN', price: '$3500', exchange: 'NASDAQ' },
];

// Define the Template for Table component
const Template: StoryFn<{ data: { symbol: string; price: string; exchange: string }[]; onRowClick?: (id: number) => void }> = (args) => <Table {...args} />;

// Default Table: Displays the table with sample data
export const Default: Story = {
  args: {
    data: sampleData, // Pass the sample data
  },
};

// Table with Row Click: Allows rows to be clicked and triggers an action
export const WithRowClick: Story = {
  args: {
    data: sampleData,
    onRowClick: (id: any) => alert(`Row ${id + 1} clicked`), // Adds click functionality to log in the actions panel
  },
};

// Table with Empty Data: Simulates a table with no data
export const WithEmptyData: Story = {
  args: {
    data: [], // Empty data array
  },
};

// Table with Multiple Rows: Show how the table behaves with more rows
export const WithMultipleRows: Story = {
  args: {
    data: [
      ...sampleData,
      { symbol: 'TSLA', price: '$700', exchange: 'NASDAQ' }, // Adding another row
      { symbol: 'NFLX', price: '$500', exchange: 'NASDAQ' }, // Adding another row
    ],
  },
};
