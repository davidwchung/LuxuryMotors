import { Typography, Link } from "@material-ui/core";
import useStyles from "../styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography variant="subtitle1" align="center">
        Feel free to check out my portfolio site!
      </Typography>
      <Typography align="center">
        <Link href="http://www.davidwchung.com" target="_blank">
          www.davidwchung.com
        </Link>
      </Typography>
    </div>
  );
};

export default Footer;
