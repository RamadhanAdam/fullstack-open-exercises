import { useState, useEffect } from 'react';
import axios from 'axios'

const Filter = ({ nameFilter, handleNameFilter }) => {
  return (<div>
    first shown with: <input value={nameFilter} onChange={handleNameFilter} />
  </div>)
}
const Numbers = ({ filteredPersons }) => {
  return (
    <ul>
      {filteredPersons.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  )
}

const Persons = ({ handleSubmit, newNumber, newName, handleNumber, handleName }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>)
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');  // State for controlling the form input element for name
  const [newNumber, setNewNumber] = useState(''); // State for controlling the form input element for number
  const [nameFilter, setNameFilter] = useState(''); // State for controlling the name filter input

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if the new name or number is empty
    if (newName.trim() === '' || newNumber.trim() === '') {
      alert('Input cannot be empty');
      return;
    }

    // Check for name or number duplication
    if (persons.some((person) => person.name === newName || person.number === newNumber)) {
      alert(`${newName} ${newNumber} is already in the phonebook`);
    } else {
      // Add the new person to the phonebook
      const newPerson = { name: newName, number: newNumber };
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  };
 //effect for fetching persons from database(json server)
  useEffect(()=>{axios
    .get('http://localhost:3001/persons')
    .then((response) =>{
     console.log("promise fulfilled")
     setPersons(response.data)
    }
   )}, [])
  // Event handler for name input
  const handleName = (e) => {
    const value = e.target.value.trim();
    setNewName(value);
  };

  // Event handler for number input
  const handleNumber = (e) => {
    const value = e.target.value.trim();
    setNewNumber(value);
  };

  // Event handler for name filter input
  const handleNameFilter = (e) => {
    const value = e.target.value.trim();
    setNameFilter(value);
  };

  // Filtered persons based on the name filter
  const filteredPersons = nameFilter
    ? persons.filter((person) => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleNameFilter={handleNameFilter} />
      <h3>add new</h3>
      <Persons handleSubmit={handleSubmit} newNumber={newNumber} handleNumber={handleNumber} newName={newName} handleName={handleName} />
      <h2>Numbers</h2>
      <Numbers filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;