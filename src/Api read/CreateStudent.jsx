import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../Api read/Ap.css'
import axios from 'axios';

const CreateStudent = () => {
  const [id, setId]=useState("");
  const [name, setname]=useState("");
  const [username, setusername]=useState("");
  const [email, setemail]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    const studentData=(id,name,username,email);
    console.log(studentData)
   fetch('https://jsonplaceholder.typicode.com/post')
.then(res => console.log(res.data))
.catch(err => console.error(err.message)
)}
  return (
    <div className='container'>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={id} onChange={e=>setId(e.target.value)
        }/>

         <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={e=>setname(e.target.value)
        } />

         <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={e=>setusername(e.target.value)
        } />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={e=>setemail(e.target.value)
        } />
<div>
  <button className='btn btn-save'>Save</button>
  <Link to='/studentinfo'>
  <button className='btn-back'>Back</button>
</Link>


</div>

      </form>
    </div>
  )
}

export default CreateStudent
