import axios from 'axios';

export function loadData() {
    return(dispatch)=>{
        return axios.get(`http://localhost:8000/projects`).then((response) => {
            dispatch(getData(response.data.products));
        })
    }
}

export function getData(products){
    return{
        type:"GET_DATA",
        products: products
    }
}

export function incrementQuantity(value){
    return{
        type: "INCREMENT",
        value: value
    }
}

export function decrementQuantity(value){
    return{
        type: "DECREMENT",
        value: value
    }
}

export function addToCart(item) {
    return{
        type: "ADD_TO_CART",
        id: item.product_id,
        item: item
    }
}

export function removeFromCart(item){
    return {
        type: "REMOVE_FROM_CART",
        id: item.product_id,
        item: item
    }
}