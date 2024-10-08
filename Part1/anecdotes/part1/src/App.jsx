import { useState } from 'react'

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);

}
const VotedAnecdote = ({anecdotes,points}) =>{
  const maxVotes = (Math.max.apply(Math,points))
  const winner = anecdotes[points.indexOf(maxVotes)]
  if (Math.max.apply(Math,points)>0)
    {
    return(<>
    <h1>Anecdote with most votes</h1>
      <p1>
        {winner}
      </p1>
      <br></br>
      <p1>
        Has {maxVotes} votes
        </p1>
      </>)
  } 
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(getRandomArbitrary(0, anecdotes.length-1))
  const handleVote = () =>{
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }
  return (
    <div>
      <h1>Wisdom</h1>
      <p>
      {anecdotes[selected]}<br></br>
      Has {points[selected]} votes
      </p>
      <button onClick = {handleVote}>
        Vote
      </button>
      <button onClick = {()=>setSelected(getRandomArbitrary(0, anecdotes.length-1),console.log(selected))}>
        Next!
      </button>
      <VotedAnecdote anecdotes={anecdotes} points={points}></VotedAnecdote>
    </div>
  )
}

export default App