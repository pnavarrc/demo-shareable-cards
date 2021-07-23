import Head from "next/head";
import Link from "next/link";
import { Button, Container } from "@material-ui/core";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Cosmic Crisp Recipes</title>
      </Head>
      <Container>
        <h1>🍎 Recipes!</h1>

        <Link href="/recipes" passHref>
          <Button color="primary" variant="contained">
            Recipes
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default HomePage;
