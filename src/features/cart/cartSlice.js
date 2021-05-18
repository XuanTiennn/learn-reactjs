import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showCart: false,
        cartItems: [],
    },
    reducers: {
        showCartItem: (state) => {
            state.showCart = true;
        },
        hideCartItem: (state) => {
            state.showCart = false;
        },
        addtoCart: (state, action) => {
            const newItem = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === newItem.id);
            if (index >= 0) {
                state.cartItems[index].quantity=state.cartItems[index].quantity + newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }
        },
        setQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === id);
            if (index >= 0) {
                state.cartItems[index].quantity = quantity;
            }
        },
        removeCart: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter((x) => x.id !== id);
        },
    },
    
});

// Action creators are generated for each case reducer function
export const { showCartItem, hideCartItem ,addtoCart,setQuantity,removeCart} = cartSlice.actions;

export default cartSlice.reducer;
