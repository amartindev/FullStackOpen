import React, { useState } from 'react'
import Phonebook from './phonebook'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {

    event.preventDefault()
    const phonebook = {
      name: newName,
    }
    setPersons(persons.concat(phonebook))
    setNewName('')
  }

  const nameChange = (event) => {
    setNewName(event.target.value)
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={nameChange}/>
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