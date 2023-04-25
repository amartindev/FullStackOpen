import React from 'react'

const Filter = ({ findPerson, findPersonChange }) => {
    return (
        <div>
            Search: <input value={findPerson} onChange={findPersonChange}/>
        </div>
      )
}

export default Filter