import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import { useSelector } from "react-redux";

import useStyles from "../styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Header = () => {
  const classes = useStyles();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  let totalItems = 0;
  cartItems.forEach((item) => {
    totalItems += item.quantity;
  });

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Luxury Motors
        </Typography>
        <Button
          href="/cart"
          color="inherit"
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          CART ({totalItems})
        </Button>
        <Button href="/" color="inherit">
          SHOP
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
