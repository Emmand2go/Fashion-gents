// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Homepage from './Pages/Homepage'
// import About from './Pages/About'
// import contact from './Pages/Contact'

// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Homepage</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <hr />

//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//  <Routes>
//       <Route path='/' element={<Homepage/>} />
//       {/* <Route path='/about' element={<About/>} />
//       <Route path='/contact' element={<Contact/>} /> */}
//     </Routes>
//   )
// }
 
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import StudentInfo from './Api read/StudentInfo'
import './App.css'
import EditStudent from './Api read/EditStudent'
import ViewStudent from './Api read/ViewStudent'
import CreateStudent from './Api read/CreateStudent'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Userlist from './Pages/Userlist'
import ProtectedRoute from "./Components/ProtectedRoute";
import Userslist from './Pages/Userlist';
import EditUser from './Pages/EditUser';

function App() {
  // const isAuthenticated = !!localStorage.getItem("https://students-learning-api.onrender.com/api/auth");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

// Check if user is already logged in (persist login)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <>
    <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
    <Routes>

        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/userlist' element={<Userlist/>}/> */}

         {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/userlist" element={<Userlist />} />
          </>
        ) : (
          // Redirect unauthenticated users back to login
          <Route path="*" element={<Navigate to="/" />} />
        )};
        {/* <Route path="/studentinfo" element={<StudentInfo />} />  */}
      
        {/* <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home/>
            </ProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/about"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <About/>
            </ProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/contact"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Contact/>
            </ProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/userlist"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Userslist/>
            </ProtectedRoute>} /> */}
         <Route path="/register" element={<Register/>} />
         {/* <Route path="/userlist/edit/:id" element={<EditUser />} /> */}
        </Routes>
         
        </>
  )
}
      
      /* <Routes>
        // <Route path="/studentinfo/edit" element={<EditStudent />} />
        //  <Route path="/studentinfo/view" element={<ViewStudent />} />
        //  <Route path="/studentinfo/create" element={<CreateStudent />} />
        //  <Route path="/register" element={<Register />} />
//       </Routes> */
//     {/* </Router> */}
//   );
// }



// {/* //  import { useState } from "react"
// // import reactLogo from "./assets/react.svg"
// // import viteLogo from "/vite.svg"
// // import React from "react";
// // import {BrowserRouter, Routes, Route } from "react-router-dom";
// // import Homepage from "./Pages/Homepage"
// // // import Home from "./Pages/Home";
// // // import About from "./Pages/About";
// // // import Contact from "./Pages/Contact"; */}


// {/* // function App() { */}
// //   return (
// //     <>
// // <BrowserRouter>
// // <Navbar />
// // {/* <div style={{ padding: "2rem" }}>
// // <Routes>
// // <Route path="/" element={<Home />} />
// // <Route path="/about" element={<About />} />
// // <Route path="/contact" element={<Contact />} />
// // </Routes>
// // </div> */}
// // </BrowserRouter>
// //   </>
// //   );
// // };
export default App;

