import React from 'react';
import {data} from './../components/GetData';
import {Image, 
  QuantityDescription, QuantityTitle, 
  QuantityInput, BasketButton, 
  Parent, MainTitle} from '../components/index'
  import mouse from '../assets/mouse.jpg'

  class GetProducts extends React.Component {
    state = {
      products: [],
      name: ''
    }
    componentDidMount() {
        data().then(data=>{ 
          this.setState({
            products: data.products
          })
        });
    }
    render() {
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
                              <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
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

export default GetProducts