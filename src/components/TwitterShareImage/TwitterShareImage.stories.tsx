import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwitterShareImage from "./TwitterShareImage";

export default {
  title: "Components/TwitterShareImage",
  component: TwitterShareImage,
} as ComponentMeta<typeof TwitterShareImage>;

const Template: ComponentStory<typeof TwitterShareImage> = (args) => (
  <TwitterShareImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  // Add props here
};
