import React, { useState } from 'react'
import Phonebook from './phonebook'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber]= useState('')
  const [findPerson, setNewFindPerson] =useState('')

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

  const findedPerson = persons.filter(person => person.name.toLowerCase().includes(findPerson.toLowerCase()));
  const foundPersons = findPerson ? findedPerson : [];

  const nameChange = (event) => {
    setNewName(event.target.value)
  }

  const numChange = (event) => {
    setNewNumber(event.target.value)
  }

  const findPersonChange =(event) => {
    setNewFindPerson(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Search: <input value={findPerson} onChange={findPersonChange}/>
      </div>
      <ul>
        {foundPersons.map(name => (
            <Phonebook  key={name.name} name={name} />
          ))}
      </ul>
      <h2>Add a new</h2>
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