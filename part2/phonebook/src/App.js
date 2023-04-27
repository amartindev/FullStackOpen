import React, { useState, useEffect } from 'react'
import Phonebook from './components/phonebook'
import Form from './components/form'
import Filter from './components/filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber]= useState('')
  const [findPerson, setNewFindPerson] =useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

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
      <Phonebook  persons={foundPersons} />
      <h2>Add a new</h2>
      <Form addName={addName} newName={newName} nameChange={nameChange} newNumber={newNumber} numChange={numChange} />
      <h2>Numbers</h2>
      <Phonebook  persons={persons} />
    </div>
  )
}

export default App