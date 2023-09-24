
export const cartSelector = state => state.cart.cart

export const getCurrentQtyByIdSelector = id => state => {
   return state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0
}

export const getTotalQuantitySelector = state => {
   return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
}

export const getTotalPriceSelector = state => {
   return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
}
