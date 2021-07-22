import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import { Container, Typography } from "@material-ui/core";
import { Recipe, recipes, getRecipeBySlug } from "../../src/cms";

const RecipePage: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <Container>
      <Typography variant="h1">{recipe.title}</Typography>
    </Container>
  );
};

export default RecipePage;

interface RecipeUrlProps extends ParsedUrlQuery {
  recipe: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { recipe: recipeSlug } = params as RecipeUrlProps;
  const recipe = getRecipeBySlug(recipeSlug);
  return {
    props: { recipe },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = recipes.map((recipe) => ({ params: { recipe: recipe.slug } }));
  return { paths, fallback: false };
};
