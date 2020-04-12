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
  const Text = styled.p`
    font-size: 13px;
  `
  const LogoImage = styled.img`
    width: 100px;
    margin-left: 10px;
    display: inline-block;
  ` 
  const ReviewImage = styled.img`
    margin-left: 30px;
    width: 80px;
    display: block;
  ` 
  const NoReview = styled.p`
    margin-left: 30px;
    width: 80px;
    display: inline-block;
    white-space: nowrap;
  ` 
  const Link = styled.a`
    margin-left: 30px;
    margin-top: 5px;
    width: 80px;
    display: block;
    white-space: nowrap;
  `
  const WrapDiv = styled.div`
    display: inline-block;
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

    checkFreeShipping(freeShipping){
      if (freeShipping){
        return 'Free Shipping: Over £' + freeShipping;
      }
      return false;
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
                              <WrapDiv>
                                <LogoImage alt="companyLogo" src={retailer.company_logo}/>
                                <Text>Delivery costs: from £{retailer.frozen_shipping}</Text>
                                <Text>{this.checkFreeShipping(retailer.free_shipping)}</Text>
                              </WrapDiv>
                                  <QuantityDescription>{retailer.price.toFixed(2)} </QuantityDescription>
                                  {
                                    retailer.company_review ?
                                    <WrapDiv>
                                      <ReviewImage alt="companyReview" src={retailer.company_review}/>
                                      <Link href={retailer.company_review_link}>{retailer.company_review_numbers}</Link>
                                    </WrapDiv>
                                    : <NoReview>Not Available</NoReview>
                                  }
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
