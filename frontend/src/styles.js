import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  (theme) => ({
    title: {
      flexGrow: 1,
    },
    welcome: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
    },
    welcomeButtons: {
      marginTop: "30px",
    },
    gridContainer: {
      padding: "30px 20px",
    },
    carPageContainer: {
      padding: "130px 20px",
    },
    card: {
      width: "auto",
      height: "100%",
    },
    carImage: {
      height: "250px",
      width: "100%",
    },
    carButtons: {
      marginTop: "20px",
    },
    checkoutItems: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    checkoutCard: {
      marginBottom: "5px",
    },
    checkoutItemGrid: {
      padding: "10px",
    },
    checkoutImage: {
      width: "100px",
      height: "100px",
    },
    checkoutImg: {
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    checkoutName: {
      paddingLeft: "10px",
      maxWidth: "225px",
    },
    checkoutPrice: {
      maxWidth: "150px",
    },
    checkoutQuantity: {
      maxWidth: "100px",
    },
    checkoutRemove: {
      maxWidth: "50px",
    },
    checkoutTotal: {
      minWidth: "400px",
      maxWidth: "400px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: "20px 0px",
    },
  }),
  { index: 1 }
);

export default useStyles;
