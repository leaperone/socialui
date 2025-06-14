import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../card';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    title: { control: 'text' },
    href: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Documentation',
    href: 'https://turbo.build/repo/docs',
    children: 'Find in-depth information about Turbo features and API.',
  },
};

export const Learn: Story = {
  args: {
    title: 'Learn',
    href: 'https://turbo.build/repo/docs/handbook',
    children: 'Learn about Turbo in an interactive course with quizzes!',
  },
};

export const Templates: Story = {
  args: {
    title: 'Templates',
    href: 'https://vercel.com/templates',
    children: 'Discover and deploy boilerplate example Turbo apps.',
  },
};

export const Deploy: Story = {
  args: {
    title: 'Deploy',
    href: 'https://vercel.com/new',
    children: 'Instantly deploy your Turbo app with Vercel.',
    className: 'custom-card-class',
  },
}; 