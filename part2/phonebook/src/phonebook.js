import React from 'react'

const Phonebook = ({ name }) => {
    return <li>{name.name} {name.number}</li>

}

export default Phonebook