import React from 'react';
import {
  QuantityInput,
  PlusButton, MinusButton} from '../components/index'
  
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [0]
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment(e){
    let id = e.target.id;
    this.setState({
      value: this.state.value.map((item, index) => {
        if (index == id) return item + 1;
        else return item;
      })
    });
  }

  decrement(e){
    let id = e.target.id;
    this.setState({
      value: this.state.value.map((item, index) => {
        if (index === id && !item < 1) return item - 1;
        else return item;
      })
    });
  }
  

  render() {
    return this.state.value.map((item, id) => {
      return (
        <div>
          <MinusButton onClick={this.decrement}>-</MinusButton><QuantityInput value={item} /><PlusButton id={id} onClick={this.increment}>+</PlusButton>
        </div>
      );
    });
  }
}

export default Counter

