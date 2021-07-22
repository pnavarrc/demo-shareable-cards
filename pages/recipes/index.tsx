import { Container, Typography } from "@material-ui/core";
import { Recipe, recipes } from "../../src/cms";
import Link from "next/link";

const RecipesHomePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1">Recipes</Typography>
      <ul>
        {recipes.map((recipe) => (
          <li>
            <Link href={`/recipes/${recipe.slug}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default RecipesHomePage;
