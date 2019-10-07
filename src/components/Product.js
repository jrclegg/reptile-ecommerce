import React from 'react';
import * as actionCreators from "../store/actions/index"
import {Image, 
  QuantityDescription, QuantityTitle, 
  QuantityInput, BasketButton, 
  Parent, MainTitle, PlusButton, MinusButton} from '../components/index'
  import mouse from '../assets/mouse.jpg'
  import { connect } from 'react-redux'

  class GetProducts extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: '',
      }
    }
    componentWillMount() {
      this.props.loadData();
    }
    handleClick = (id)=>{
      this.props.addToCart(id);
    }

    increment(value){
      this.props.incrementQuantity(value)
    }

    decrement(value) {
      if (value > 1) {
          this.props.decrementQuantity(value)
          return;
      }
    }

    render() {
      const {products, value} = this.props
      return(
         products.map((item) =>
            <div key={item.id} >
              {this.props.name === item.product_name ?
              <React.Fragment>
                <MainTitle>{item.product_name}</MainTitle>
                <Parent>
                  <Image src={mouse}></Image>
                </Parent>
                {item.packs.map(pack =>
                  <div key={pack.quantity}>
                      <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                      {pack.retailers
                          .sort((a,b) => a.price - b.price)
                          .map(retailer =>
                              <div key={retailer.company_id}>
                                  <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)} </QuantityDescription>
                                  <MinusButton onClick={() => {this.decrement(value)}}>-</MinusButton><QuantityInput value={value}/><PlusButton id={pack.quantity} onClick={() => {this.increment(value)}}>+</PlusButton>
                                    <BasketButton onClick={() => {this.handleClick(retailer)}}>Add To Basket</BasketButton>
                              </div>
                      )}
                  </div>
                )}
                </React.Fragment>
                : ''
              }
            </div>
          )
        )
    }
  }


  const mapStateToProps=(state)=>{
    return state
};

export default connect(mapStateToProps, actionCreators)(GetProducts);
