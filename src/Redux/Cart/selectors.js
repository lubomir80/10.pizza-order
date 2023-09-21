
export const cartSelector = state => state.cart.cart

export const getTotalQuantitySelector = state => {
   return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
}

export const getTotalPriceSelector = state => {
   return state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);
}