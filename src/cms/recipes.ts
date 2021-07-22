import keyBy from "lodash/keyBy";

export interface Recipe {
  title: string;
  slug: string;
  imgUrl: string;
}

export const recipes: Recipe[] = [
  {
    title: "Apple Relish",
    slug: "apple-relish",
    imgUrl:
      "https://cosmiccrisp.com/wp-content/uploads/2021/05/210419-Chadwick-190-600x500.jpg",
  },
  {
    title: "Apple-Cherry Pie by Erin Jeanne McDowell",
    slug: "apple-cherry-pie",
    imgUrl:
      "https://cosmiccrisp.com/wp-content/uploads/2021/05/210419-Chadwick-452-scaled-e1622046232801-600x500.jpg",
  },
  {
    title: "Apple Lemon Agua Fresca with Mint & Basil",
    slug: "apple-lemon-agua-fresca",
    imgUrl:
      "https://cosmiccrisp.com/wp-content/uploads/2021/05/210419-Chadwick-771-scaled-e1621631803741-600x500.jpg",
  },
];

const recipeBySlug = keyBy(recipes, (recipe) => recipe.slug);

export const getRecipeBySlug = (slug: string): Recipe => {
  const recipe = recipeBySlug[slug];
  return recipe;
};
