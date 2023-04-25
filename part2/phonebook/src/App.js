import React, { useState } from 'react'
import Phonebook from './phonebook'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '123456789' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber]= useState('')

  const addName = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (persons.find(person => person.name === newName)) {
      window.alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
    }

    setNewName('');
    setNewNumber('')
  }

  const nameChange = (event) => {
    setNewName(event.target.value)
  }

  const numChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={nameChange}/>
        </div>
        <div>
          Number: <input value={newNumber} onChange={numChange}/> 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map(name => (
          <Phonebook  key={name.name} name={name} />
        ))}
      </ul>
    </div>
  )
}

export default App