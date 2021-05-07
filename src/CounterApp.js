import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {
  /**
   * Creating a basic "Hook"
   */
  const [count, setCount] = useState(value)
  /**
   * Adding a unit to the "count" value
   */
  const counter = () => {
    setCount( count + 1)
  }
  /**
   * Resetting the "count" value
   */
  const restart = () => {
    setCount ( value )
  }
  /**
   * Subtracting a unit from the value "count"
   */
  const substract = () => {
    setCount (count - 1)
  }

  return (
    <>
      <div>
        <h1>CounterApp</h1>
        <h2>{ count }</h2>
        <button onClick = { counter }>+1</button>
        <button onClick = { restart }>Reset</button>
        <button onClick = { substract }>-1</button>
      </div>
    </>
  )
}

CounterApp.propTypes = { 
  value: PropTypes.number
}

export default CounterApp;
