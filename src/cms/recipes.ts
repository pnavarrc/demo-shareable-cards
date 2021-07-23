import keyBy from "lodash/keyBy";

export interface Recipe {
  title: string;
  slug: string;
  imgUrl: string;
  description: string;
}

export const recipes: Recipe[] = [
  {
    title: "Apple Relish",
    slug: "apple-relish",
    imgUrl:
      "https://cosmiccrisp.com/wp-content/uploads/2021/05/210419-Chadwick-190-600x500.jpg",
    description:
      "You’re about to meet your favorite condiment! It’s bright with zippy mustard flavor and goes with everything from burgers to grilled veggies and breads.",
  },
  {
    title: "Apple-Cherry Pie by Erin Jeanne McDowell",
    slug: "apple-cherry-pie",
    imgUrl:
      "https://cosmiccrisp.com/wp-content/uploads/2021/05/210419-Chadwick-452-scaled-e1622046232801-600x500.jpg",
    description:
      "Combining two fruits in one pie is a surefire way to juicy filling success – and there’s no more perfect sweet-tart combination than Cosmic Crisp®  apples with summer cherries.",
  },
  {
    title: "Apple Lemon Agua Fresca with Mint & Basil",
    slug: "apple-lemon-agua-fresca",
    imgUrl:
      "https://cosmiccrisp.com/wp-content/uploads/2021/05/210419-Chadwick-771-scaled-e1621631803741-600x500.jpg",
    description:
      "Add the Cosmic Crisp® apples, honey, mint and basil to a blender. Pour in the water. Blend very well, about 45 seconds-1 minute. ",
  },
];

const recipeBySlug = keyBy(recipes, (recipe) => recipe.slug);

export const getRecipeBySlug = (slug: string): Recipe => {
  const recipe = recipeBySlug[slug];
  return recipe;
};
