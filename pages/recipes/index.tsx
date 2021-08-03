import { Container, Typography, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import Head from "next/head";
import { recipes, getRecipeBySlug } from "../../src/cms";
import RecipeShareCard from "../../src/components/RecipeShareCard";

const RecipesHomePage: React.FC = () => {
  const router = useRouter();
  const { shareId } = router.query;
  const sharedRecipe =
    typeof shareId === "string" ? getRecipeBySlug(shareId) : null;
  return (
    <>
      <Head>
        <meta name="twitter:card" key="twitter_card" content="summary" />
        <meta
          name="twitter:site"
          key="twitter_site"
          content={"apple recipes"}
        />
        <meta
          name="twitter:creator"
          key="twitter_creator"
          content={"@pnavarrc"}
        />
        {/* Generic content */}
        <meta
          name="twitter:title"
          key="twitter_title"
          content={"Apple recipes"}
        />
        <meta
          name="twitter:description"
          key="twitter_description"
          content={"generic description"}
        />
        <meta
          name="twitter:image"
          key="twitter_image"
          content="https://cosmiccrisp.com/wp-content/uploads/2021/03/Apple-Date-Crisp-e1614727396388-600x500.png"
        />
        {/* Shared content */}
        {sharedRecipe && (
          <>
            <meta
              name="twitter:title"
              key="twitter_title"
              content={sharedRecipe.title}
            />
            <meta
              name="twitter:description"
              key="twitter_description"
              content={sharedRecipe.description}
            />
            <meta
              name="twitter:image"
              key="twitter_image"
              content={sharedRecipe.imgUrl}
            />
            <title key="title">{sharedRecipe.title}</title>
          </>
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
