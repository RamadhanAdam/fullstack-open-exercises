import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGood = () =>{
    const updateGood = good + 1
    setGood(updateGood)
  }
  const handleNeutral = () =>{
    const updateNeutral =  neutral + 1
    setNeutral(updateNeutral)
  }
  const handleBad = () =>{
    const updateBad =  bad + 1
    setBad(updateBad)
  }

  const total = (good + bad + neutral)
  const avg = total === 0 ? 0:  (good * 1 + bad * 0 + neutral *-1)/total
  const percentage = good/total

  return (
    <div>
      <h1>give feedback</h1>
      <Button  onClick = {handleGood} text = "good"/>
      <Button onClick = {handleNeutral} text = "neutral" />
      <Button  onClick = {handleBad} text = "bad" />

      <h1>statistics</h1>
      <p>good : {good}</p>
      <p>neutral : {neutral}</p>
      <p>bad : {bad}</p>
      <p>all : {total}</p>
      <p>average : {avg}</p>
      <p>percentage : {percentage}</p>
    </div >

  )
}

export default App;
