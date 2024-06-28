// CounterWithReducer.js
import React, { useReducer } from 'react';

const initialState = { count: 2 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count * 2 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>useReducer Hook Example</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default CounterWithReducer;
