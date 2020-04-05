import React from 'react';
import * as actionCreators from "../store/actions/index"
import {Image, 
  QuantityDescription, QuantityTitle, 
  QuantityInput, BasketButton, 
  Parent, MainTitle, PlusButton, MinusButton} from '../components/index'
  import mouse from '../assets/mouse.jpg'
  import { connect } from 'react-redux'
  import styled from 'styled-components'

  const PackWrapper = styled.div`
    padding: 0;
    text-align: center;
    margin-bottom: 20px;
  `
  const LogoImage = styled.img`
  height: 100px;
  width: 140px;
`


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
                              <PackWrapper key={retailer.company_id}>
                                  <LogoImage alt="companyLogo" src={retailer.company_logo}/>
                                  <QuantityDescription>{retailer.price.toFixed(2)} </QuantityDescription>
                                  <BasketButton onClick={() => {this.handleClick(retailer)}}>Go To Store</BasketButton>
                              </PackWrapper>
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
