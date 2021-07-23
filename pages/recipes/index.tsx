import { Container, Typography, Grid } from "@material-ui/core";
import { recipes } from "../../src/cms";
import RecipeShareCard from "../../src/components/RecipeShareCard";

const RecipesHomePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1">Recipes</Typography>
      <Grid container spacing={2}>
        {recipes.map((recipe) => (
          <Grid item md={4}>
            <RecipeShareCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecipesHomePage;
