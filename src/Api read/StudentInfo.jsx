import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import '../Api read/Ap.css'

const StudentInfo = () => {
  const [info, setInfo] = useState([]);
     useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("There was Error fetching data", err);
      });
  }, []);
  return (
    <div className='container'>
        <h2>Student Records</h2>
      <div className="table-container">
       <Link to='/studentinfo/create' class='btn btn-add'>Add new Student</Link>
       <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody> 
           {info.map((item)=>(
          <tr>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.username}</td>
<td>{item.email}</td>
<td>
  <a href="" className='btn btn-info'>View</a>
  <a href="" className='btn btn-edit'>Edit</a>
  <a href=""className='btn btn-danger'>Delete</a>
</td>
</tr>))}
        </tbody>
       </table>
      </div>
    </div>
  )
}

export default StudentInfo
