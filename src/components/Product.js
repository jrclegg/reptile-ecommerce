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
    margin-left: 10px;
    margin-right: 20px;
    margin-bottom: 40px;
  `

  const TextWrapper = styled.div`
    margin-left: 5px;
    @media only screen and (max-width: 720px) {
      display: none;
    }
  `
  const Text = styled.p`
    font-size: 11px;
  `
  const LogoImage = styled.img`
    width: 30%;
    margin-left: 6%;
    display: inline-block;
    @media only screen and (min-width: 1024px) {
      width: 23%;
      margin-left: 12%;
    }
  ` 
  const ReviewImage = styled.img`
    margin-left: 30px;
    width: 80px;
    display: block;
    @media only screen and (max-width: 520px) {
      display: none;
    }
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
  const ReviewLink = styled.a`
  margin-left: 30px;
  margin-top: 5px;
  font-size: 16px;
  display: block;
  white-space: nowrap;
`
  const WrapDiv = styled.div`
    display: inline-block;
  `
  const WrapReview = styled(WrapDiv)`
    display: inline-block;
    margin: 10px;
    @media only screen and (max-width: 720px) {
      display: none;
    }
  `
  const LinkButton = styled.button`
   text-decoration: none;
   color: white;
   background: ${props => props.theme.colors.default};
   display: inline-block;
   height: 50px;
   width: 30%;
   font-size: 18px;
   left: 30px;
   border-radius: 24px;
   font-weight: bold;
   position: relative;
   top: -10px;
   &:hover {
    cursor: pointer;
   }
  @media only screen and (min-width: 720px) {
    margin-top: 30px;
    font-size: 30px;
    height: 70px
    margin-left: 30px;
  }
  @media only screen and (min-width: 1024px) {
    width: 25%;
    border-radius: 35px;
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
                <PackWrapper>
                <MainTitle>{item.product_name} ({item.product_weight})</MainTitle>
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
                                <LogoImage alt="companyLogo" src={retailer.company_logo}/>
                                {/* {item.product_id < 52 ?
                                  <React.Fragment>
                                    <TextWrapper>
                                      <Text>Delivery costs: </Text>
                                      <Text>£{retailer.frozen_shipping}{this.ifCompanyIsOnlineReptileShop(retailer.company_name) ? '*' : ''}</Text>
                                      <Text>£{retailer.frozen_shipping_extra}</Text>
                                      {this.ifCompanyIsOnlineReptileShop(retailer.company_name)}
                                      {this.ifCompanyIsEvolutionReptiles(retailer.company_name)}
                                      <Text>{this.checkFreeShipping(retailer.free_shipping)}</Text>
                                    </TextWrapper>
                                   </React.Fragment>
                                   : item.product_id >= 53 ?
                                   <React.Fragment>
                                    <TextWrapper>
                                      <Text>Delivery costs: from £{retailer.live_shipping}{this.ifCompanyIsOnlineReptileShop(retailer.company_name) ? '*' : ''}</Text>
                                      {this.ifCompanyIsOnlineReptileShop(retailer.company_name)}
                                      {this.ifCompanyIsEvolutionReptiles(retailer.company_name)}
                                      <Text>{this.checkFreeShipping(retailer.free_shipping)}</Text>
                                    </TextWrapper>
                                  </React.Fragment>
                                   : ''
                                } */}
                                  <QuantityDescription>£{retailer.price.toFixed(2)}</QuantityDescription>
                                  {/* {
                                    retailer.company_review ?
                                    <WrapReview>
                                      <ReviewImage alt="companyReview" src={retailer.company_review}/>
                                      <ReviewLink href={retailer.company_review_link}>{retailer.company_review_numbers}</ReviewLink>
                                    </WrapReview>
                                    : <NoReview>Not Available</NoReview>
                                  } */}
                                  <a href={retailer.product_link}><LinkButton type="button">Go To Store</LinkButton></a>
                              </PackWrapper>
                      )}
                  </div>
                )}
                  </PackWrapper>
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
