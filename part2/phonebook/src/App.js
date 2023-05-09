import React, { useState, useEffect } from 'react'
import Phonebook from './components/phonebook'
import Form from './components/form'
import Filter from './components/filter'
import noteBook from './services/notes'
import axios from 'axios'

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
      if(window.confirm(`${newName} is already added to the phonebook, remplace the old number with a new one?`)){
        const updatedPersons = persons.map(person =>
          person.name === newName ? { ...person, number: newNumber } : person
        );
        setPersons(updatedPersons);
      }
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

  const deleteName = (id) => {
    if(window.confirm("Delete?")){
      axios.delete(`http://localhost:3001/persons/${id}`)
      .then(()=>{
        noteBook
        .getAll()
        .then(initialAgenda => {
          setPersons(initialAgenda)
        })
      })
      .catch(error => {
        console.error('Error al realizar la solicitud DELETE', error);
      });
    }
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
      <Phonebook  persons={foundPersons} deleteName={deleteName}/>
      <h2>Add a new</h2>
      <Form addName={addName} newName={newName} nameChange={nameChange} newNumber={newNumber} numChange={numChange} />
      <h2>Numbers</h2>
      <Phonebook  persons={persons} deleteName={deleteName} />
    </div>
  )
}

export default App