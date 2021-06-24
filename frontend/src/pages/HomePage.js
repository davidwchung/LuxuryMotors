import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import useStyles from "../styles";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllCars } from "../redux/actions/carActions";
import Footer from "../Components/Footer";

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getCars = useSelector((state) => state.getCars);
  const { cars, loading, error } = getCars;

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  let randomId = "";

  const randomIndex = Math.floor(Math.random() * cars.length);
  if (cars[randomIndex]) {
    randomId = cars[randomIndex]._id;
  }

  return (
    <>
      {loading ? (
        <h5>Loading...</h5>
      ) : error ? (
        <h5>{error}</h5>
      ) : (
        <>
          <div className={classes.welcome}>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Welcome!
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Find the car of your dreams today.
              </Typography>
              <div className={classes.welcomeButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      href={`car/${randomId}`}
                      variant="contained"
                      color="primary"
                    >
                      View Random Car
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href="/cart" variant="outlined" color="primary">
                      View Cart
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.gridContainer} maxWidth="lg">
            <Grid container spacing={6}>
              {cars.map((car) => (
                <Grid item key={car._id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.carImage}
                        image={car.imageUrl}
                        title={car.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {`${car.manufacturer} ${car.name}`}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                          {car.price
                            ? `$${car.price.toLocaleString()}`
                            : `$${car.price}`}
                        </Typography>
                        <Typography variant="subtitle2">
                          {car.description
                            ? `${car.description.substring(0, 100)}....`
                            : ""}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        fullWidth
                        href={`car/${car._id}`}
                        size="small"
                        color="primary"
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      )}
      <Footer />
    </>
  );
};

export default HomePage;
