import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'


const Cardpract = () => {
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
    <div>
      <div className='card'>
      {info.map((data)=>(
        <div key={data.id}>
            <h2>Personal Info</h2>
            <p>
                Name: {data.name} <br />
                City: {data.address.street}
                Owerri <br />
                Phone Num: {data.phone} <br />
                Teacher
            </p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Cardpract
