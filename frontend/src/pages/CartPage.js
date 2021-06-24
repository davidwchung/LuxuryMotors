import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  ButtonBase,
  IconButton,
} from "@material-ui/core";
import useStyles from "../styles";
import DeleteIcon from "@material-ui/icons/Delete";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/actions/cartActions";

const CartPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  function removeFromCartHandler(id) {
    dispatch(removeFromCart(id));
  }

  function checkoutHandler() {
    dispatch(clearCart());
  }

  let totalItems = 0;
  cartItems.forEach((item) => {
    totalItems += item.quantity;
  });

  let subTotal = 0;
  cartItems.forEach((item) => {
    subTotal += item.price * item.quantity;
  });

  const expectedTax = subTotal * 0.2;
  const grandTotal = subTotal + expectedTax;

  return (
    <>
      <Container className={classes.gridContainer} maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Cart Items
        </Typography>
        {cartItems.length > 0 ? (
          <Grid container spacing={6} alignItems="flex-start">
            <Grid item className={classes.checkoutItems} xs={12} sm={12} md={8}>
              {cartItems.map((item) => (
                <Card key={item.id} className={classes.checkoutCard}>
                  <Grid container className={classes.checkoutItemGrid}>
                    <Grid item>
                      <ButtonBase
                        href={`car/${item.id}`}
                        className={classes.checkoutImage}
                      >
                        <img
                          className={classes.checkoutImg}
                          alt={item.name}
                          src={item.imageUrl}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      zeroMinWidth
                    >
                      <Grid item xs className={classes.checkoutName}>
                        <Typography>
                          {item.manufacturer} {item.name}
                        </Typography>
                      </Grid>
                      <Grid item xs className={classes.checkoutPrice}>
                        <Typography>
                          Price: ${item.price.toLocaleString()}
                        </Typography>
                      </Grid>
                      <Grid item xs className={classes.checkoutQuantity}>
                        <Typography>Quantity: {item.quantity}</Typography>
                      </Grid>
                      <Grid item xs className={classes.checkoutRemove}>
                        <IconButton
                          onClick={() => removeFromCartHandler(item.id)}
                          aria-label="delete"
                          className={classes.margin}
                          color="secondary"
                        >
                          <DeleteIcon fontSize="default" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              ))}
            </Grid>
            <Grid
              item
              className={classes.checkoutTotal}
              container
              xs={12}
              sm={12}
              md={4}
              justify="space-between"
            >
              <Typography variant="h6" display="inline" align="left">
                Items ({totalItems}):
              </Typography>
              <Typography variant="h6" display="inline" align="right">
                $
                {subTotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Typography>
              <Typography variant="h6" display="inline" align="left">
                Estimated Tax (20%):
              </Typography>
              <Typography variant="h6" display="inline" align="right">
                $
                {expectedTax.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Typography>
              <Typography variant="h6" display="inline" align="left">
                Grand Total:
              </Typography>
              <Typography variant="h6" display="inline" align="right">
                $
                {grandTotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Typography>
              <Button
                onClick={checkoutHandler}
                href="/"
                fullWidth
                variant="contained"
                color="primary"
                align="center"
              >
                Place Order
              </Button>
            </Grid>
          </Grid>
        ) : (
          <>
            <Typography variant="h6" align="center">
              Your Cart is Empty
            </Typography>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button href="/" variant="contained" color="primary">
                  View Cars
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export default CartPage;
