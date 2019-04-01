import React from 'react'
import {data} from '../components/GetData';

class FrozenFood extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    data().then(data=>{ 
      this.setState({
           products: data
       })
   });
 }
  render() {
    return (
      <p>Frozen Food</p>
    )
  }
}
export default FrozenFood