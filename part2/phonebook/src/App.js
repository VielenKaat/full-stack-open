import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const submitForm = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }

    setPersons(persons.concat(newPerson))
    setNewName('')

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitForm}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) =>
          <li key={person.name}>
            {person.name}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App  