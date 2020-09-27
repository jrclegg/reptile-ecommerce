import React from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'

const mapStateToProps = state => ({
  counters: state
})

const CounterCollection = props =>
  <div className='container'>
    {props.counters.map(value =>
      <Counter 
      incrementAction={()=>{}} 
      decrementAction={()=>{}} 
      counter={value}/>
    )}
  </div>

export default connect(mapStateToProps)(CounterCollection)