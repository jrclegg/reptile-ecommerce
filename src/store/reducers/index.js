let defaultState={
    products: [],
    cart: [],
    multiplier: 1
}

const mainReducer=(state = defaultState, action)=>{
    switch(action.type){
        case "GET_DATA":
            return{
                ...state,
                products: action.products
            }
        case "INCREMENT":
        return{
            ...state,
            multiplier: action.multiplier+1
        }
        case "DECREMENT":
        return{
            ...state,
            multiplier: action.multiplier-1
        }
        case 'ADD_TO_CART':
            var itemExists = state.products.find(item => item.product_id === action.id);
            if (itemExists) {
                return {
                    ...state, 
                    cart: action.item
                }
            } else {
                return {
                    ...state, 
                    cart: action.item
                }
            }
        default: 
        return state;
    }  
}

export default mainReducer