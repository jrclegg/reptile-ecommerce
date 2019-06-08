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
      return <PassedComponent  {...this.props}
      products={this.state.products} />
    }
  }
)

export default getProducts