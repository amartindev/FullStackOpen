import React from 'react'

const Form = ({addName,newName,nameChange,newNumber,numChange})=>{
    return (
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
    )
}

export default Form