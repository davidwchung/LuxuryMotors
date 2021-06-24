import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import useStyles from "../styles";
import "../App.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCarById } from "../redux/actions/carActions";
import { addToCart } from "../redux/actions/cartActions";

const CarPage = ({ match, history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getCar = useSelector((state) => state.getCar);
  const { car, loading, error } = getCar;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (car && match.params.id !== car._id) {
      dispatch(getCarById(match.params.id));
    }
  }, [dispatch, car, match]);

  function addToCartHandler() {
    dispatch(addToCart(car._id, currQuantity));
    history.push("/cart");
  }

  function showMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showMoreButton");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show Less";
      moreText.style.display = "inline";
    }
  }

  let currQuantity = 0;

  if (cartItems) {
    if (cartItems.find((x) => x.id === match.params.id)) {
      currQuantity = cartItems.find((x) => x.id === match.params.id).quantity;
    } else {
      currQuantity = 1;
    }
  }

  return (
    <>
      {loading ? (
        <h5>Loading...</h5>
      ) : error ? (
        <h5>{error}</h5>
      ) : (
        <>
          <Container className={classes.carPageContainer} maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item key={car.imageUrl} xs={12} sm={12} md={6}>
                <CardMedia
                  component="img"
                  image={car.imageUrl}
                  title={car.name}
                />
                <Grid
                  container
                  spacing={2}
                  justify="center"
                  className={classes.carButtons}
                >
                  <Grid item>
                    {currQuantity < car.stock ? (
                      <Button
                        onClick={addToCartHandler}
                        variant="contained"
                        color="primary"
                      >
                        Add To cart
                      </Button>
                    ) : (
                      <Button variant="contained" color="primary" disabled>
                        Out Of Stock
                      </Button>
                    )}
                  </Grid>
                  <Grid item>
                    <Button href="/" variant="outlined" color="primary">
                      Back To All Cars
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item key={car._id} xs={12} sm={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="h2">
                      {`${car.manufacturer} ${car.name}`}
                    </Typography>
                    <Typography variant="h6" component="h2">
                      Price:{" "}
                      {car.price
                        ? `$${car.price.toLocaleString()}`
                        : `$${car.price}`}
                    </Typography>
                    <Typography variant="h6" component="h2">
                      Horsepower: {car.horsepower}
                    </Typography>
                    <Typography variant="subtitle1" component="h2">
                      Stock: {car.stock}
                    </Typography>
                    <p>
                      {car.description
                        ? car.description.substring(0, 200)
                        : car.description}
                      <span id="dots">....</span>
                      <span id="more">
                        {car.description
                          ? car.description.substring(
                              200,
                              car.description.length
                            )
                          : car.description}
                      </span>
                    </p>
                    <button
                      className="showMoreButton"
                      onClick={showMore}
                      id="showMoreButton"
                    >
                      Show More
                    </button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};

export default CarPage;
