import axios from "axios";

const createPerson = (newPerson) => {
    return axios.post('http://localhost:3001/persons', newPerson)
}
const deletePerson= (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`);
}
const getAll = () =>{
    return axios.get('http://localhost:3001/persons')
}

export default {createPerson,deletePerson, getAll}