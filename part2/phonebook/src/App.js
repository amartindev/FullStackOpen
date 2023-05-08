import React, { useState, useEffect } from 'react'
import Phonebook from './components/phonebook'
import Form from './components/form'
import Filter from './components/filter'
import axios from 'axios'
import noteBook from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber]= useState('')
  const [findPerson, setNewFindPerson] =useState('')

  useEffect(() => {
    noteBook
    .getAll()
    .then(initialAgenda => {
      setPersons(initialAgenda)
    })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.find(person => person.name === newName)) {
      window.alert(`${newName} is already added to the phonebook`)
    } else {
      noteBook
      .create(newPerson)
      .then(returnedAgenda => {
        setPersons(persons.concat(returnedAgenda))
      })
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
      <Phonebook  persons={foundPersons} />
      <h2>Add a new</h2>
      <Form addName={addName} newName={newName} nameChange={nameChange} newNumber={newNumber} numChange={numChange} />
      <h2>Numbers</h2>
      <Phonebook  persons={persons} />
    </div>
  )
}

export default App