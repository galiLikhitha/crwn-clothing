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
export const removeItemFromCart = (cartItems, cartItemToRemove)=>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id

    );
    if(existingCartItem.quantity === 1){
        return cartItems.filter(
            cartItem => cartItem.id === cartItemToRemove.id 
           
        )
    }
    return cartItems.map(
        cartItem => cartItem.id ?
        {...cartItem, quantity : cartItem.quantity -1}
        : cartItem
    )

}