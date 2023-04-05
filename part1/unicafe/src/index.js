import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.text} {props.value}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const setToValue = (value, set) => () => {
    set(value + 1);
    }

  useEffect(() => {
    let total = good - bad;
    let all = good + neutral + bad;
    let average = total / all;
    let positive = good * 100 / all;
    setAverage(average);
    setPositive(positive + '%');
  }, [good, neutral, bad]);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={setToValue(good, setGood)} text="good" />
      <Button handleClick={setToValue(neutral, setNeutral)} text="neutral" />
      <Button handleClick={setToValue(bad, setBad)} text="bad" />
      <h2>Statistics</h2>
      <Display value={good} text="good" />
      <Display value={neutral} text="neutral" />
      <Display value={bad} text="bad" />
      <Display value={average} text="average" />
      <Display value={positive} text="positive" />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
