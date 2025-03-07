import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

const createPerson = (newPerson) => {
    return axios.post(`${baseUrl}`, newPerson)
}
const deletePerson= (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}
const getAll = () =>{
    return axios.get(`${baseUrl}`)
}
const updatePerson = (id, updatedPerson) => {
    return axios.put(`${baseUrl}/${id}`, updatedPerson);
  };

export default {createPerson,deletePerson, getAll, updatePerson}