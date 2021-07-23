import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Recipe } from "../../../src/cms";
import Link from "next/link";

const RecipeShareCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <Card style={{ maxWidth: 345 }}>
      <CardMedia
        style={{ height: 140 }}
        image={recipe.imgUrl}
        title={recipe.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link href={`/recipes/${recipe.slug}`} passHref>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default RecipeShareCard;
