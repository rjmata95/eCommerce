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

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    // minHeight: "300px",
  },
  Product__img: {
    paddingTop: "56.25%",
    // height: "auto",
    // width: "auto",
    maxWidth: "80%",
    margin: "0 auto",
  },
}));

const Product = ({ product, handleAddToCart }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} raised>
      {console.log(`inside product: ${product}`)}
      <CardActionArea>
        <CardHeader
          title={
            <Typography variant="h4" align="center">
              {product.strMeal}
            </Typography>
          }
        />
        <CardMedia
          className={classes.Product__img}
          image={product.strMealThumb}
          title={product.strMeal}
        />
        <CardContent>
          <Typography variant="subtitle2">${10}</Typography>
          <Typography variant="caption">{product.short_description}</Typography>
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
  );
};

export default Product;
