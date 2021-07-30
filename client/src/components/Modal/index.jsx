import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

const Modal = ({ product, button, isOpen, onClose, classes }) => {
  return (
    <Dialog
      open={isOpen}
      // TransitionComponent={<Slide />}
      // keepMounted
      onClose={onClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{product.title}</DialogTitle>
      <DialogContent className={classes.modal}>
        <img
          alt={product.title}
          src={product.image}
          className={classes.modal__img}
        />
        <DialogContentText id="alert-dialog-slide-description">
          {product.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ea esse corporis sunt velit aliquid autem reiciendis voluptatibus
          officia sed harum deleniti similique, placeat praesentium?
        </DialogContentText>
      </DialogContent>
      <DialogActions>{button}</DialogActions>
    </Dialog>
  );
};

export default Modal;
