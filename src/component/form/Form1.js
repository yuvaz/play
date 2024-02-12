import React, {useState} from 'react'
import "./form.css"

function Form1() {
const [form, setForm] = useState({
  firstName : "",
  lastName: "",
  age: "",
  gender: "",
  city: ""
})

const handleForm = (e) => {
  // [e.target.name] // passing this as a key
  setForm({
    ...form,  // spreading the current data of form then updating single value
    [e.target.name]: e.target.value
  })
}

console.log(form)
  const {firstName, lastName, age, gender, city} = form
  return (
    <div>
      <form>
        <input type="text" name="firstName" placeholder="Enter First name" onChange={handleForm} />
        <input type="text" name="lastName" placeholder="Enter Last name" onChange={handleForm} />
        <input type="text" name="age" placeholder="Enter Age" onChange={handleForm} />
        <input type="text" name="gender" placeholder="Enter Gender" onChange={handleForm} />
        <input type="text" name="city" placeholder="Enter City" onChange={handleForm} />
      </form>
      <div className="displayDetails">
        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Age : {age}</p>
        <p>Gender : {gender}</p>
        <p>City : {city}</p>

      </div>
    </div>
  )
}

export default Form1