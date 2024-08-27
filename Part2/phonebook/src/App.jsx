import { useState } from 'react'

const Form = (props) => {
  const handleVarChange = (event) =>{
    props.setVariable(event.target.value)
  }
  return (<>
    {props.text}: <input value = {props.variable} onChange = {handleVarChange}/>
  </> )
}

const Persons = ({persons, search}) => {
  const filterPersons = () => {
    return ([...persons].filter(person => person.name.toLowerCase().includes(search.toLowerCase())))
  }
  return(    
    <ul>
    {filterPersons().map(person =>
      <li key = {person.id}>
        <Person fullName={person.name} number={person.number} />
      </li>
    )}
  </ul>
  )
}

const Person = ({fullName, number}) => {
  return(
    <p>Name: {fullName} <br></br>Number: {number}</p>
  )
}

const App = () => {
  const [search,setNewSearch]= useState('')

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [id, setId] = useState(1)

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      number: '07942124352',
      id: 0
    }
  ]) 

  const addNewName = (event)=>{
    event.preventDefault()
    if (!persons.some((person)=>person.name===newName) && !persons.some((person)=>person.number===newNumber)){
      setId(id+1)
      setPersons(persons.concat(
        {
        name: newName,
        number: newNumber,
        id: id
      }
    )
  )
      setNewName('')
      setNewNumber('')      
  }
  else {
    alert(`Name ${newName} or number ${newNumber} is already in the phonebook`)
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div><Form text = {'Search'} variable = {search} setVariable= {setNewSearch}></Form></div>

      <h2>Add someone</h2>

      <div>
        <Form text ={'name'} variable = {newName} setVariable = {setNewName} ></Form>
        <br></br>
        <Form text ={'number'} variable = {newNumber} setVariable = {setNewNumber} ></Form>
        <br></br>
        <button type="submit" onClick={addNewName}>add</button>
      </div>

      <h2>Numbers</h2>
      <Persons persons={persons} search={search}></Persons>
      ...
    </div>
    
  )
}

export default App