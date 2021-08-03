import { ParsedUrlQuery } from "querystring";
import { Container, Typography, Grid } from "@material-ui/core";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { recipes, getRecipeBySlug, Recipe } from "../../../src/cms";
import RecipeShareCard from "../../../src/components/RecipeShareCard";

const RecipesHomeShared: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Rendering your page...</div>;
  }

  return (
    <>
      <Head>
        <meta
          name="twitter:card"
          key="twitter_card"
          content="summary_large_image"
        />
        <meta name="twitter:site" key="twitter_site" content="@pnavarrc" />
        <meta
          name="twitter:creator"
          key="twitter_creator"
          content="@pnavarrc"
        />
        <meta name="twitter:title" key="twitter_title" content={recipe.title} />
        <meta
          name="twitter:description"
          key="twitter_description"
          content={recipe.description}
        />
        <meta
          name="twitter:image"
          key="twitter_image"
          content={recipe.imgUrl}
        />
        <title key="title">{recipe.title}</title>
      </Head>
      <Container>
        <Typography variant="h1">Apple Recipes</Typography>
        <Grid container spacing={2}>
          {recipes.map((item) => (
            <Grid key={item.slug} item md={4}>
              <RecipeShareCard
                recipe={item}
                highlight={recipe.slug === item.slug}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

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
  return { paths, fallback: true };
};

export default RecipesHomeShared;
