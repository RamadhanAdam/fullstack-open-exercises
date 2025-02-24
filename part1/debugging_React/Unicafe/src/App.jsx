import { useState } from 'react'

//button component for rendering buttons and handling its events
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

// creates a row for each statistics value
const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td> {text} </td>
      <td>{value}</td>
    </tr>

  )
}

//calculates statistics for rendering
const Statistics = ({ good, neutral, bad, total, avg, percentage }) => {
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="All" value={total} />
          <StatisticsLine text="Average" value={avg} />
          <StatisticsLine text="Positive" value={`${percentage}%`} />
        </tbody>
      </table>

    </div>
  );
};

//the component for viewing
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

  const total = good + bad + neutral
  const avg = total ? (good-bad)/total : 0;
  const percentage = total  ? (good / total) * 100 : 0;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <h1>statistics</h1>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (<Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        avg={avg}
        percentage={percentage}
      />
      )}

    </div >

  )
}

export default App;
