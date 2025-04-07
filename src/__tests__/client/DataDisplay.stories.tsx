import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DataDisplay } from '../../client/components/DataDisplay';


// Define the meta configuration for the DataDisplay component
const meta: Meta<typeof DataDisplay> = {
  title: 'Components/DataDisplay',
  component: DataDisplay,
  parameters: {
    layout: 'centered', // Center the component in the Storybook canvas
  },
  tags: ['autodocs'], // Enable autodocs if needed
  argTypes: {
    url: {
      control: 'text', // Allow the URL to be controlled through the Storybook UI
      description: 'API URL to fetch data from', // Provide a description for this prop
    },
  },
} satisfies Meta<typeof DataDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

// Define the stories for DataDisplay component

// Default story: Simulates loading data from a valid API
export const Default: Story = {
  args: {
    url: 'https://jsonplaceholder.typicode.com/todos/1', // Example valid URL
  },
};

// Story for when an error occurs during fetching data
export const WithError: Story = {
  args: {
    url: 'https://jsonplaceholder.typicode.com/404', // Invalid URL to simulate an error
  },
};

// Story for when the API returns an empty response
export const WithEmptyResponse: Story = {
  args: {
    url: 'https://jsonplaceholder.typicode.com/todos/2', // URL that returns an empty response
  },
};
