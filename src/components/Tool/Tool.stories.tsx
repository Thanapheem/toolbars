import type { Meta, StoryObj } from "@storybook/react";
import Tool from "./Tool";
const meta: Meta<typeof Text> = {
  title: "Components/Tool",
  component: Tool,
  argTypes: {
    onClick: { action: "clicked" },
  }
};

export default meta;

type Story = StoryObj<typeof Tool>;

export const Primary: Story = {
  args: {
    showProfile: false,
    showLanguageSwitcher: false,
  },
};

// export const Secondary: Story = {
//   args: {
//     ...Primary.args,
//     type: "secondary",
//     label: "Secondary 😇",
//   },
// };
