import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
    //payload can be anything, item we are trying 
    //to add to our cart array is passed here
})