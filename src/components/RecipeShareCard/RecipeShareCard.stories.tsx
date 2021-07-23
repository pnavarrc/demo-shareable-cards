import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RecipeShareCard from "./RecipeShareCard";
import { recipes } from "../../cms";

export default {
  title: "Components/RecipeShareCard",
  component: RecipeShareCard,
} as ComponentMeta<typeof RecipeShareCard>;

const Template: ComponentStory<typeof RecipeShareCard> = (args) => (
  <RecipeShareCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  recipe: recipes[0],
};
