import React from 'react';
import {data} from './../components/GetData';

  class GetProducts extends React.Component {
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
      return this.props.render(
        this.state
      );
    }
  }

export default GetProducts