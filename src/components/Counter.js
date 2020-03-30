import React from 'react';
import * as actionCreators from "../store/actions/index"
import { connect } from 'react-redux'
import {
  QuantityInput,
  Button} from '../components/index'
import styled from 'styled-components'

const CounterWrapper = styled.div`
   display: inline-block;
   margin-left: 60px;
`

  
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  componentDidMount(){
    this.setState({
      value: this.state.value
    })
    this.props.incrementDefault(this.state.value);
  }
  
  increment(){
    this.setState({
      value: this.state.value+1
    })
    this.props.incrementQuantity(this.state.value);
  }

  decrement(){
    if (this.state.value > 1) {
      this.setState({
        value: this.state.value-1
      })
      this.props.decrementQuantity(this.state.value);
    }
  }


  render() {
    return (
        <CounterWrapper>
          <Button onClick={this.decrement}>-</Button><QuantityInput value={this.state.value} /><Button onClick={this.increment}>+</Button>
        </CounterWrapper>
      );
  }
}

const mapStateToProps=(state)=>{
  return state
};

export default connect(mapStateToProps, actionCreators)(Counter);


