import React from 'react'

const Phonebook = ({ persons, deleteName }) => {
    return (
        <ul>
        {persons.map(name => (
            <li key={name.name}>
                {name.name} {name.number} 
                <button onClick={() => deleteName(name.id)}> Delete </button> 
            </li>
        ))}
        </ul>
    )
}

export default Phonebook