import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "warn", "danger"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    id: "application-button-primary",
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    id: "application-button-secondary",
    variant: "secondary",
    children: "Button",
  },
};

export const Warn: Story = {
  args: {
    id: "application-button-warn",
    variant: "warn",
    children: "Warn Button",
  },
};

export const Danger: Story = {
  args: {
    id: "application-button-danger",
    variant: "danger",
    children: "Danger Button",
  },
};

export const Large: Story = {
  args: {
    id: "application-button-large",
    size: "large",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    id: "application-button-small",
    size: "small",
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    id: "application-button-disabled",
    variant: "primary",
    children: "Disabled",
    disabled: true,
  },
};
