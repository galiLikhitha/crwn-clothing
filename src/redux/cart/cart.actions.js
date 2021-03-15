import CartActionTypes from './cart.types';
export const toggleCartHidden = () =>({
    type : CartActionTypes.TOGGLE_CART_HDDEN

});
export const addItem = item =>({
    type : CartActionTypes.ADD_ITEM,
    payload : item

})


// const CartActionTypes ={
//     TOGGLE_CART_HDDEN :'TOGGLE_CART_HDDEN'
// };
// export default CartActionTypes;