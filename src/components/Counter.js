import React from 'react';
import {
  QuantityInput,
  PlusButton, MinusButton} from '../components/index'


const Counter = props =>
  <React.Fragment>
    <MinusButton onClick={props.decrement}>-</MinusButton><QuantityInput value= {props.value} /><PlusButton onClick={props.increment}>+</PlusButton>
  </React.Fragment>

export default Counter
