let defaultState={
    products: [],
    cart: [],
    value: 1
}

const mainReducer=(state = defaultState, action)=>{
    switch(action.type){
        case "GET_DATA":
            return{
                ...state,
                products: action.products
            }
        case "INCREMENT":
        console.log(state)
            return{
                ...state,
                value: action.value+1
            }
        case "DECREMENT":
            return{
                ...state,
                value: action.value-1
            }
        case 'ADD_TO_CART':
            const  newCart = [...state.cart, action.item]
            var itemExists = state.cart.find(item => item.product_id === action.id);
            var packExists = state.cart.find(item => item.quantity === action.item.quantity);
            if (itemExists && packExists) {
                return state
            } else {
                return {
                    ...state, 
                    cart: newCart
                }
            }
        case 'REMOVE_FROM_CART':
            const firstMatchIndex = state.cart.indexOf(action.item)
                const newArray = state.cart.filter((item, index) => index !== firstMatchIndex)
                return {
                    ...state, 
                    cart: newArray
                }
        default: 
        return state;
    }  
}

export default mainReducer