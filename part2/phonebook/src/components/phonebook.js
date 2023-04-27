import React from 'react'

const Phonebook = ({ persons }) => {
    return (
        <ul>
        {persons.map(name => (
            <li key={name.name}>{name.name} {name.number}</li>
        ))}
        </ul>
    )
}

export default Phonebook