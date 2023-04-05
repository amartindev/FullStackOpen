import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = props => <div>{props.text} {props.value}</div>

const Statistics = (props) => {
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let diference = props.good - props.bad;
    let all = props.good + props.neutral + props.bad;
    setTotal(all);
    setAverage(diference / all);
    setPositive((props.good * 100 / all) + '%');
  }, [props.good, props.neutral, props.bad])

  if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }else {
    return (
      <div>
        <h2>Statistics</h2>
        <StatisticLine value={props.good} text="good" />
        <StatisticLine value={props.neutral} text="neutral" />
        <StatisticLine value={props.bad} text="bad" />
        <StatisticLine value={total} text="total" />
        <StatisticLine value={average} text="average" />
        <StatisticLine value={positive} text="positive" />
      </div>
    )
  }
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
