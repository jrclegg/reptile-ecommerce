import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../components/BasketButton'
import BasketButton from '../components/BasketButton';
import styled from 'styled-components'
import Image from '../components/Image'
import mouse from '../assets/mouseother.jpg'

const ItemWrapper = styled.div`
  margin: 10px;
  width: 90%;
  border: 1px solid black;
  padding: 10px;
`

const ProductWrapper = styled.div`
  display: inline-block;
`
const PriceWrapper = styled.div`
  display: inline-block;
  margin-left: 20%;
`
const QuantityWrapper = styled.div`
  display: inline-block;
  margin-left: 5%;
`
const TotalWrapper = styled.div`
  display: inline-block;
  margin-left: 5%;
`

class Cart extends Component{

    handleAddQuantity = (id)=>{
      this.props.addQuantity(id);
    }

    handleRemove = (id)=>{
      this.props.removeFromCart(id);
    }
    render(){
        console.log(this.props.cart)
        return(
            this.props.cart.map((cartItem) =>
                <ItemWrapper key={cartItem.price}>
                  <ProductWrapper>
                    <p>Product</p>
                    <p>{cartItem.product_name} {cartItem.product_weight}</p>
                  </ProductWrapper>
                  <PriceWrapper>
                    <p>Price</p>
                    <p>{cartItem.price}</p>
                  </PriceWrapper>
                  <QuantityWrapper>
                    <p>Quantity</p>
                    <p>{cartItem.quantity}</p>
                  </QuantityWrapper>
                  <TotalWrapper>
                    <p>Total</p>
                    <p>{cartItem.price}</p>
                  </TotalWrapper>
                  <button onClick={() => {this.handleRemove(cartItem)}}>Remove</button>
                </ItemWrapper>
            )
        )
    }
}
function mapStateToProps(state) {
    return {
      cart: state.cart
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      addToCart: (item) => {
        dispatch({ type: 'ADD', payload: item })
      },
      removeFromCart: (item) => {
        dispatch({ type: 'REMOVE', payload: item })
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cart)