import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../components/BasketButton'
import styled from 'styled-components'
import * as actionCreators from "../store/actions/index"


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
      const {cart, multiplier} = this.props
      console.log(cart.product_name)
        return(
                <ItemWrapper>
                  <ProductWrapper>
                    <p>Product</p>
                    <p>{cart.product_name} {cart.product_weight}</p>
                  </ProductWrapper>
                  <PriceWrapper>
                    <p>Price</p>
                    <p>{cart.price}</p>
                  </PriceWrapper>
                  <QuantityWrapper>
                    <p>Pack</p>
                    <p>{cart.quantity}</p>
                  </QuantityWrapper>
                  <QuantityWrapper>
                    <p>Quantity</p>
                    <p>{multiplier}</p>
                  </QuantityWrapper>
                  <TotalWrapper>
                    <p>Total</p>
                    <p>{multiplier}</p>
                  </TotalWrapper>
                  <button onClick={() => {this.handleRemove(cart)}}>Remove</button>
                </ItemWrapper>
            
        )
    }
}
const mapStateToProps=(state)=>{
  return state
};

export default connect(mapStateToProps, actionCreators)(Cart);