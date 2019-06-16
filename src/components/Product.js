import React from 'react';
import {data} from './../components/GetData';

const getProducts = (PassedComponent) => (
  class getProducts extends React.Component {
    state = {
      products: []
    }
    componentDidMount() {
        data().then(data=>{ 
          this.setState({
            products: data.products
          })
        });
    }

    render() {
      console.log(this.state.products)
      return <PassedComponent {...this.props}
      products={this.state.products} key={this.state.products.product_id} />
    }
  }
)

export default getProducts