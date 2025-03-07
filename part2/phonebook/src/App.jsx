import { useState, useEffect } from 'react';
import phonebookService from './services/phonebook'
import './Notification.css'; 

const Filter = ({ nameFilter, handleNameFilter }) => {
  return (<div>
    first shown with: <input value={nameFilter} onChange={handleNameFilter} />
  </div>)
}

const Numbers = ({ filteredPersons, handleDeletedPerson }) => {
  return (
    <ul>
      {filteredPersons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDeletedPerson(person.id, person.name)}>Delete</button>
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
  const [Notification, setNotification] = useState(null); //State for success message

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the new name or number is empty
    if (newName.trim() === '' || newNumber.trim() === '') {
      alert('Input cannot be empty');
      return;
    }

    // Check if the name or number already exists
    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      if (existingPerson.number === newNumber) {
        setNotification({type : 'error' , message : 'User exists!'})
        setNotification({ type: 'success', message: `${newName} updated successfully.` });

        setTimeout(() => {
          setNotification(null);
        }, 3000); 
      }
      else if (window.confirm(`${newName} is already in the phonebook, do you want to update the number?`)) {
        // Update the phone number of the existing person
        const updatedPerson = { ...existingPerson, number: newNumber };

        phonebookService
          .updatePerson(existingPerson.id, updatedPerson)
            /* eslint-disable-next-line no-unused-vars */
          .then((response) => {
            setPersons(persons.map((person) =>
              person.id !== existingPerson.id
                ? person
                : updatedPerson
            ));
            setNewName('');
            setNewNumber('');
            setNotification({ type: 'success', message: `${newName} updated successfully.` });

            setTimeout(() => {
              setNotification(null);
            }, 3000); // Clear notification after 3 seconds
          })
          .catch((error) => {
            setNotification({ type: 'error', message: `Error: ${error.response.data.error}` });

            setTimeout(() => {
              setNotification(null);
            }, 5000); // Show error message for 5 seconds
          });
      }
    } else {
      // Add the new person to the phonebook
      const newPerson = {
        name: newName,
        number: newNumber,
        id: String(++persons.length)
      };

      phonebookService
        .createPerson(newPerson)
          /* eslint-disable-next-line no-unused-vars */
        .then((response) => {
          setPersons(persons.concat(newPerson));
          setNewName('');
          setNewNumber('');
          setNotification({ type: 'success', message: `${newName} added successfully.` });

          setTimeout(() => {
            setNotification(null);
          }, 3000); 
        })
        .catch((error) => {
          setNotification({ type: 'error', message: `Error: ${error.response.data.error}` });

          setTimeout(() => {
            setNotification(null);
          }, 5000); 
        });
    }
  };


  //effect for fetching persons from database(json server)
  useEffect(() => {

    phonebookService
      .getAll()
      .then((response) => {
        setPersons(response.data)
      }
      )
  }, [])
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

  const handleDeletedPerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      phonebookService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        /* eslint-disable-next-line no-unused-vars */
        .catch((error) => {
          alert(`Error: ${name} already deleted from server`);
        })
    } else {
      console.log("Action canceled.");
    }
  }
  // Filtered persons based on the name filter
  const filteredPersons = nameFilter
    ? persons.filter((person) => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
    : persons;

  return (
    <div>
      {Notification && (
        <div className={`notification ${Notification.type}`}> {Notification.message} </div>
      )}
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleNameFilter={handleNameFilter} />
      <h3>add new</h3>
      <Persons handleSubmit={handleSubmit} newNumber={newNumber} handleNumber={handleNumber} newName={newName} handleName={handleName} />
      <h2>Numbers</h2>
      <Numbers filteredPersons={filteredPersons} handleDeletedPerson={handleDeletedPerson} />
    </div>
  );
};

export default App;