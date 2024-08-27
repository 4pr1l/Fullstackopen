import { useState } from 'react'

const Header = ({title}) => {
  return (
    <h1>
      {title}
    </h1>
  )
}
const Button =({text, handleClick}) => {
  return(
  <button onClick={handleClick}>
    {text}
  </button>
  )
}

const StatisticLine = ({text,value}) =>{
  return(
    <>
    <p>{text}: {value}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = "Feedback"

  if (good+neutral+bad !=0){
    return (
      <div>
        <Header title = {title}></Header>
        <Button handleClick={() =>setGood(good+1)}  text = "Good"/>
        <Button handleClick={() =>setNeutral(neutral+1)}  text = "Neutral"/>
        <Button handleClick={() =>setBad(bad+1)}  text = "Bad"/>

        <Header title = {"Statistics"}></Header>
        <StatisticLine text ="Good" value={good}></StatisticLine>
        <StatisticLine text ="Neutral" value={neutral}></StatisticLine>
        <StatisticLine text ="Bad" value={bad}></StatisticLine>
        <StatisticLine text ="Total" value={bad + neutral + good}></StatisticLine>
        <StatisticLine text ="Average" value={(good-bad)/(bad+neutral+good)}></StatisticLine>
        <StatisticLine text ="positive percentage" value={(good)/(bad+neutral+good)}></StatisticLine>
      </div>
)
}  
return (
    <div>
      <Header title = {title}></Header>
      <Button handleClick={() =>setGood(good+1)}  text = "Good"/>
      <Button handleClick={() =>setNeutral(neutral+1)}  text = "Neutral"/>
      <Button handleClick={() =>setBad(bad+1)}  text = "Bad"/>
      </div>
        )
}

export default App