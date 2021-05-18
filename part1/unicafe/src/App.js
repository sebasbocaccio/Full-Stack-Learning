
import React, { useState } from 'react'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistic = ({text, value}) => {
	return (
		<tr>
		<td> {text} </td>
		<td>{value}</td>
		</tr>
	)
}
const Statistics = ({good,neutral,bad}) => {
   
  // No feedback given
  if ((good+neutral+bad) === 0){
    return (
      <div>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
    )
  }
 
 else{ return ( 
 <div>
   <h1>  Statistics</h1>
  <table>
    <tbody>
      <Statistic text = {'good'}  value = {good} />
      <Statistic text = {'neutral'} value = {neutral} />  
      <Statistic text = {'bad'} value = {bad} />  
      <Statistic text = {'all'} value = {bad+neutral+good} />  
      <Statistic text=  {"average"} value = {(((good * 1) + (bad * -1)))/(good+neutral+bad)} /> 
      <Statistic text = {"positive"}  value = {((good) / (bad+good + neutral)*100).toFixed(2) + '%' } /> 
    </tbody>
  </table>
  </div>
   )
 }  
}
const App = () => {
  // save clicks of each button to its own state
   
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {
    
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    
    setNeutral(neutral + 1 )
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
         <h1>Give feedback</h1>
      <div>
        <h1>
        <Button handleClick={handleGoodClick} text='good' />
       <Button handleClick={handleNeutralClick} text='neutral' />  
       <Button handleClick={handleBadClick} text='bad' />
       </h1>
      </div>
      <Statistics good ={good} bad= {bad} neutral = {neutral} />
       
      </div>
      
    )
}
export default App
