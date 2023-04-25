import React, { useState } from 'react'
import Phonebook from './components/phonebook'
import Form from './components/form'
import Filter from './components/filter'

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
      <Filter findPerson={findPerson} findPersonChange={findPersonChange} />
      <ul>
        {foundPersons.map(name => (
            <Phonebook  key={name.name} name={name} />
          ))}
      </ul>
      <h2>Add a new</h2>
      <Form addName={addName} newName={newName} nameChange={nameChange} newNumber={newNumber} numChange={numChange} />
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