import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import { Container, Typography } from "@material-ui/core";
import { Recipe, recipes, getRecipeBySlug } from "../../src/cms";
import Head from "next/head";
import Image from "next/image";

const RecipePage: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary" key="twitter_card" />
        <meta name="twitter:title" content={recipe.title} key="twitter_title" />
        <meta
          name="twitter:image"
          content={recipe.imgUrl}
          key="twitter_image"
        />
      </Head>
      <Container>
        <Typography variant="h1">{recipe.title}</Typography>
        <Typography variant="body2" gutterBottom>
          {recipe.description}
        </Typography>
        <Image src={recipe.imgUrl} width={600} height={400} />
      </Container>
    </>
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
