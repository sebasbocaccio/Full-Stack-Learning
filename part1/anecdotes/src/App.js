
import React, { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < Object.keys(arr).length; i++) {
      
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }
  console.log(maxIndex);
  return maxIndex;
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
   
  const votes = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [allVotes, setVotes] = useState(votes)
  const [preferedAnecdote, setPreferedAnecdote] = useState(anecdotes[0])
  const changeAnecdote = () => {
    
    setSelected(Math.floor((Math.random() * (anecdotes.length))))
  }
  
  const voteAnecdote = () => {
    
    const copy = { ...allVotes }
    copy[selected] += 1
    const newFavorite  = anecdotes[indexOfMax(copy)] 
    setPreferedAnecdote(newFavorite)
    setVotes(copy)  
  

  }
  

  return (
    <div>
     <div>
     {anecdotes[selected]}  has {allVotes[selected]} votes
     </div>
      <div>
    
      <Button handleClick={changeAnecdote} text='next anecdote' />
      <Button handleClick={voteAnecdote} text='vote' />
      </div>
      
      <div>
      <h1>Anecdote with most votes</h1>
      {preferedAnecdote}
     </div>
       </div>
  )
}

export default App


