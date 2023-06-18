import Button from "./button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: {
      name: "label",
      type: "string",
      description: "Label of button",
    },
    size: {
      name: "size",
      description: "Size of button `small` | `medium` | `large`",
      options: ["small", "medium", "large"],
      control: {
        type: "select",
      },
      table: {
        defaultValue: { summary: "medium" },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: "primary",
    label: "Button Primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button Secondary",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    color: "primary",
    label: "Button Large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    color: "primary",
    label: "Button Small",
  },
};
