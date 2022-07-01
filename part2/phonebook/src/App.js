import { useState } from 'react'

const Filter = ({ search, eventHandler }) => <div>filter shown with <input value={search} onChange={eventHandler} /></div>
const PersonForm = ({ submitForm, newName, handleNameChange, newNumber, handlePhoneChange }) =>
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

const Persons = ({ shownItems }) =>
  <ul>
    {shownItems().map((person) =>

      <li key={person.name}>
        {person.name} {person.number}
      </li>
    )}
  </ul>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)
  const [search, setSearch] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)

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

  const shownItems = () => {
    const items = persons.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    return items
  }

  // const shownNumbers = persons.filter((element))
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} />
      <h2>Add new person</h2>
      <PersonForm
        submitForm={submitForm}
        eventHandler={handleSearchChange}
        newName={newName}
        handlenameChange={handleNameChange}
        newNumber={newNumber}
        handlePhoneChange={handlePhoneChange} />


      <h2>Numbers</h2>
      <Persons shownItems={shownItems} />
    </div>
  )
}

export default App  