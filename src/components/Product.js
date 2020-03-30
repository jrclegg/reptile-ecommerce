import React from 'react';
import * as actionCreators from "../store/actions/index"
import {Image, 
  QuantityDescription, PackWrapper, QuantityTitle,  BasketButton, 
  Parent, MainTitle} from '../components/index'
import mouse from '../assets/mouse.jpg'
import { connect } from 'react-redux'
import Counter from './Counter'

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
      localStorage.setItem('cart', JSON.stringify(this.props.cart))
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
                    pack.quantity === 10 | pack.quantity === 25 | pack.quantity === 100 ? 
                  <div key={pack.quantity}>
                      <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                      {pack.retailers
                          .sort((a,b) => a.price - b.price)
                          .map(retailer =>
                            retailer.company_name === "Swell Reptiles" ? 
                              <PackWrapper key={retailer.company_id}>
                                  <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)} </QuantityDescription>
                                  <Counter 
                                    increment={() => {this.increment(this.props.value)}}
                                    decrement={() => {this.decrement(this.props.value)}}
                                    value={value} 
                                  />
                                  <BasketButton onClick={() => {this.handleClick(retailer)}}>Add To Basket</BasketButton>
                              </PackWrapper>
                              : ''
                      )}
                  </div>
                  : ''
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
