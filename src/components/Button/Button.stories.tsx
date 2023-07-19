import Button  from './Button';
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button>= {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button label="Button" />,
};
