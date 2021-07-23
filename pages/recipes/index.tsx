import { Container, Typography, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import Head from "next/head";
import { recipes, getRecipeBySlug } from "../../src/cms";
import RecipeShareCard from "../../src/components/RecipeShareCard";
import SocialMetaTags from "../../src/components/SocialMetaTags";

const RecipesHomePage: React.FC = () => {
  const router = useRouter();
  const { shareId } = router.query;
  const sharedRecipe =
    typeof shareId === "string" ? getRecipeBySlug(shareId) : null;
  return (
    <>
      <Head>
        {sharedRecipe ? (
          <SocialMetaTags
            site="@pnavarrc"
            creator="@pnavarrc"
            title={sharedRecipe.title}
            description={sharedRecipe.description}
            imageUrl={sharedRecipe.imgUrl}
          />
        ) : (
          <SocialMetaTags
            site="@pnavarrc"
            creator="@pnavarrc"
            title="Apple recipes"
            description="Apple recipes"
            imageUrl=""
          />
        )}
      </Head>
      <Container>
        <Typography variant="h1">Apple Recipes</Typography>
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
