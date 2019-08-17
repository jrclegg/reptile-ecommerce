import React from 'react';
import {data} from './../components/GetData';
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
        products: [],
        name: '',
        multiplier: 1
      }
    }
    componentDidMount() {
        data().then(data=>{ 
          this.setState({
            products: data.products
          })
        });
    }
    handleClick = (id)=>{
      this.props.addToCart(id);
    }

    incrementAdd(id){
      this.props.addQuantity(id);
      this.setState({
        multiplier: this.state.multiplier+1
      })
    }
    decrement(){
      if (this.state.multiplier > 0){
          this.setState({
            multiplier: this.state.multiplier-1
          })
          return;
      }
    }

    render() {
      console.log(this.state.products)
      return(
      this.state.products.map((item) =>
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
                               <MinusButton onClick={() => {this.decrement(retailer)}}>-</MinusButton><QuantityInput id={pack.id} value={this.state.multiplier}/><PlusButton onClick={() => {this.incrementAdd(retailer)}}>+</PlusButton>
                                <BasketButton onClick={() => {this.handleClick(retailer)}}>Add To Basket</BasketButton>
                          </div>
                      )
                  }
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


function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', id: item.product_id,  payload: item})
    },
    addQuantity: (item) => {
      dispatch({ type: 'ADD', id: item.product_id,  payload: item})
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetProducts)