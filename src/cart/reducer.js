

const cartReducer = (state = [], action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'ADD':
            var itemExists = state.find(item => item.product_id === action.id);
            if (itemExists) {
                action.payload.total+=1
                return state
            } else {
                action.payload.total=1
                return [...state, action.payload]
            }
        case 'REMOVE':
            const firstMatchIndex = state.indexOf(action.payload)
                return state.filter((item, index) => index !== firstMatchIndex)
        default:
            return state;
    }
}

export default cartReducer;