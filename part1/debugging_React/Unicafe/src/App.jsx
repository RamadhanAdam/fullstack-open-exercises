import { useState } from 'react'


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  return (
  <div>
    <h1>statistics</h1>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.total}</p>
    <p>average {props.avg}</p>
    <p>percentage {props.percentage}%</p>
  </div>)

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const updateGood = good + 1
    setGood(updateGood)

  }
  const handleNeutral = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
  }
  const handleBad = () => {
    const updateBad = bad + 1
    setBad(updateBad)
  }

  const total = (good + bad + neutral)
  const avg = total === 0 ? 0 : (good * 1 + bad * -1 + neutral * 0) / total;
  const percentage = total === 0 ? 0 : good / total * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} total={total} avg={avg} percentage={percentage} />
    </div >

  )
}

export default App;
