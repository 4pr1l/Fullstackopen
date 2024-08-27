import { useState } from 'react'

const Header = (props) => {

  return (
  <>
    <h1>{props.course}</h1>
  </>
  )
}
const Part = ({part}) =>{
  const [ counter, setCounter ] = useState(0)
  setTimeout(
    () => setCounter(counter +counter),
    1000
  )
  return (
    <>
    <p>{part.name}  {part.exercises + counter}</p>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <Part part = {props.parts[0]}/>
      <Part part = {props.parts[1]}/>
      <Part part = {props.parts[2]}/>

    </>
  )
}

const Total = ({parts}) => {
  return(
  <>
    <p>
    Number of exercises {parts.length}
    </p>
  </>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App