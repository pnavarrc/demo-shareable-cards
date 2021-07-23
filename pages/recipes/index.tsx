import { Container, Typography, Grid } from "@material-ui/core";
import Head from "next/head";
import { recipes, Recipe, getRecipeBySlug } from "../../src/cms";
import RecipeShareCard from "../../src/components/RecipeShareCard";
import { useRouter } from "next/router";

const RecipesHomePage: React.FC = () => {
  const router = useRouter();
  const { shareId } = router.query;
  const sharedRecipe =
    typeof shareId === "string" ? getRecipeBySlug(shareId) : null;
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content="Find good recipes!"></meta>
        {sharedRecipe && (
          <meta
            name="twitter:title"
            content={`Try ${sharedRecipe.title}`}
          ></meta>
        )}
      </Head>
      <Container>
        <Typography variant="h1">Recipes</Typography>
        <Grid container spacing={2}>
          {recipes.map((recipe) => (
            <Grid key={recipe.slug} item md={4}>
              <RecipeShareCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default RecipesHomePage;
