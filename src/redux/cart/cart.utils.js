export const addItemToCart = (cartItems, carttItemToAdd) =>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === carttItemToAdd.id
    ) ;
    if(existingCartItem){
        return cartItems.map(
            cartItem => cartItem.id === carttItemToAdd.id 
            ? {...cartItem, quantity : cartItem.quantity +1 }
            :cartItem
        )
    }
    return [...cartItems, {...carttItemToAdd, quantity:1} ];
}