import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: " ",
    message: " "
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name ${formData.name}, message: ${formData.message}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name : </label>
      <input name="name" type="text" value={formData.name} onChange={handleChange} />

      <br /><br />
      <label htmlFor="message">Message : </label>
      <input name="message" type="text" value={formData.value} onChange={handleChange} />

      <br /><br />
      <button type="submit" >Submit</button>
    </form>
  )
}

export default App;