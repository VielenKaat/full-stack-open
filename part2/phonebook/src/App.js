import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: 12345
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }

  const submitForm = (event) => {
    event.preventDefault()

    const exists = persons.find(({ name }) => newName === name)
    if (exists) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber(0)

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitForm}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) =>
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App  