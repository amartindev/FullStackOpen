import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.text} {props.value}</div>

const Statistics = (props) => {
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  useEffect(() => {
    let total = props.good - props.bad;
    let all = props.good + props.neutral + props.bad;
    setAverage(total / all);
    setPositive((props.good * 100 / all) + '%');
  }, [props.good, props.neutral, props.bad])

  return (
    <div>
      <h2>Statistics</h2>
      <Display value={props.good} text="good" />
      <Display value={props.neutral} text="neutral" />
      <Display value={props.bad} text="bad" />
      <Display value={average} text="average" />
      <Display value={positive} text="positive" />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setToValue = (value, set) => () => {
    set(value + 1);
    }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={setToValue(good, setGood)} text="good" />
      <Button handleClick={setToValue(neutral, setNeutral)} text="neutral" />
      <Button handleClick={setToValue(bad, setBad)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
