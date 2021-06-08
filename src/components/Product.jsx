import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  makeStyles,
  CardHeader,
} from "@material-ui/core";
import React from "react";
import Modal from "./Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    height: "100%",
  },
  Product__title: {
    height: "10rem",
  },
  Product__img: {
    paddingTop: "56.25%",
    height: "12.5rem",
    // width: "auto",
    maxWidth: "80%",
    margin: "0 auto",
  },
  Product__actions: {
    height: "100px",
  },
  modal: {
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  modal__fig: {},
  modal__img: {
    height: "50%",
    maxWidth: "80%",
    // paddingTop: "56.25%",

    margin: "0 auto",
  },
}));

const Product = ({ product, handleAddToCart }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <Modal
        isOpen={open}
        onClose={handleClickDialog}
        product={product}
        classes={classes}
        button={
          <Button
            variant="contained"
            onClick={() => {
              handleAddToCart(product);
              handleClickDialog();
            }}
            color="primary"
          >
            Add to Cart
          </Button>
        }
      />
      <Card className={classes.root} raised key={product.id}>
        {/* {console.log(product)} */}
        <CardActionArea onClick={handleClickDialog}>
          <CardHeader
            title={
              <Typography variant="h4" align="center">
                {product.title}
              </Typography>
            }
            className={classes.Product__title}
          />
          <CardMedia
            className={classes.Product__img}
            image={product.image}
            title={product.title}
          />
          <CardContent>
            <Typography variant="subtitle2">${product.price}</Typography>
            <Typography variant="caption">{product.description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
