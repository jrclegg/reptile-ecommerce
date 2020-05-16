import React from 'react';
import Footer from '../components/Footer'
import {Image, ListingImage,
  QuantityDescription, QuantityTitle, 
  QuantityInput, BasketButton, 
  Parent, MainTitle, PlusButton, MinusButton} from '../components/index'
  import * as actionCreators from "../store/actions/index"
  import locust from '../assets/locust.jpg'
  import brownCricket from '../assets/browncricket.jpg'
  import blackCricket from '../assets/blackcricket.jpg'
  import mealworms from '../assets/mealworms.jpg'
  import waxworms from '../assets/waxworms.jpg'
  import mouse from '../assets/mouse.jpg'
  import rat from '../assets/rat.jpg'
  import multimammate from '../assets/multimammate.jpg'
  import guineapig from '../assets/guineapig.jpg'
  import hamster from '../assets/hamster.jpg'
  import gerbil from '../assets/gerbil.jpg'
  import chick from '../assets/chick.jpg'
  import quail from '../assets/quail.jpg'


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
  const LinkButton = styled.a`
   width: 100px;
   height: 45px;
   display: inline-block;
   margin-left: 40px;
   @media only screen and (min-width: 720px) {
    width: 130px; 
    height: 70px;
    margin-bottom: 20px;
    margin-right: 10px;
  }
  @media only screen and (min-width: 1024px) {
    width: 300px;
  }
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

    ifCompanyIsOnlineReptileShop(companyName){
      if (companyName === "Online Reptile Shop"){
        return (
          <React.Fragment>
          <Text>For orders over £20 only*</Text>
        </React.Fragment>
        )
      }
      return false
    }

    filterFoodItemImage(productName){
      if (productName.includes("Locusts")){
          return locust;
      } else if(productName.includes("Brown")){
        return brownCricket;
      } else if (productName.includes("Black")) {
        return blackCricket;
      } else if (productName.includes("Mealworm")) {
        return mealworms;
      } else if (productName.includes("Waxworm")) {
        return waxworms;
      } else if (productName.includes("Multimammate")) {
        return multimammate;
      } else if (productName.includes("Mice") || productName.includes("Mouse")) {
        return mouse;
      } else if (productName.includes("Rat")) {
        return rat;
      } else if (productName.includes("Guinea Pig")) {
        return guineapig;
      } else if (productName.includes("Hamster")) {
        return hamster;
      } else if (productName.includes("Gerbil")) {
        return gerbil;
      } else if (productName.includes("Chick")) {
        return chick;
      } else if (productName.includes("Quail")) {
        return quail;
      }
    }

    ifCompanyIsEvolutionReptiles(companyName){
      if (companyName === "Evolution Reptiles"){
        return (
          <React.Fragment>
          <Text>£10.92 for orders above £50*</Text>
        </React.Fragment>
        )
      }
      return false
    }

    

    render() {
      const {products, value} = this.props
      console.log(products)
      return(
         products.map((item) =>
            <div key={item.id} >
              {this.props.name === item.product_name ?
              <React.Fragment>
                <MainTitle>{item.product_name}</MainTitle>
                <Parent>
                  <ListingImage src={this.filterFoodItemImage(item.product_name)}></ListingImage>
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
                                {
                                  item.product_id < 52 ?
                                  <React.Fragment>
                                    <Text>Delivery costs: from £{retailer.frozen_shipping}{this.ifCompanyIsOnlineReptileShop(retailer.company_name) ? '*' : ''}</Text>
                                      {this.ifCompanyIsOnlineReptileShop(retailer.company_name)}
                                      {this.ifCompanyIsEvolutionReptiles(retailer.company_name)}
                                    <Text>{this.checkFreeShipping(retailer.free_shipping)}</Text>
                                   </React.Fragment>
                                   : item.product_id >= 53 ?
                                   <React.Fragment>
                                    <Text>Delivery costs: from £{retailer.live_shipping}{this.ifCompanyIsOnlineReptileShop(retailer.company_name) ? '*' : ''}</Text>
                                    {this.ifCompanyIsOnlineReptileShop(retailer.company_name)}
                                    {this.ifCompanyIsEvolutionReptiles(retailer.company_name)}
                                    <Text>{this.checkFreeShipping(retailer.free_shipping)}</Text>
                                  </React.Fragment>
                                   : ''
                                }
                              </WrapDiv>
                                  <QuantityDescription>£{retailer.price.toFixed(2)} </QuantityDescription>
                                  {
                                    retailer.company_review ?
                                    <WrapDiv>
                                      <ReviewImage alt="companyReview" src={retailer.company_review}/>
                                      <Link src={retailer.company_review_link}>{retailer.company_review_numbers}</Link>
                                    </WrapDiv>
                                    : <NoReview>Not Available</NoReview>
                                  }
                                  <LinkButton href={retailer.product_link} type="button">Go To Store</LinkButton>
                              </PackWrapper>
                      )}
                  </div>
                )}
                   <Footer/>
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
