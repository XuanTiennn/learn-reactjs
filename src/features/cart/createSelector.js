const { createSelector } = require('@reduxjs/toolkit');

const cartItems = (state) => state.cart.cartItems;
const showCart = (state) => state.cart.showCart;
export const countQuantity = createSelector(cartItems, (cartItems) =>
    cartItems.reduce((count, item) => count + item.quantity, 0)
);
export const totalPrice = createSelector(cartItems, (cartItems) =>
    cartItems.reduce((total, item) => total + item.quantity * item.product.salePrice, 0)
);
export const valueCart = createSelector(showCart, (showCart) =>
   {return showCart}
);
export const array = createSelector(cartItems, (cartItems) => cartItems.reduce((a, item, index, arr) => (a = arr), ''));
