import React, { useEffect, useState } from "react";
import '../Pages/User.css'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Userslist = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  const [loading, setLoading]=useState(false)
  const [error, setError]= useState()
  const api= "https://students-learning-api.onrender.com/api/auth"

  useEffect (()=>{
  const fetchUsers = async()=> {
    try{
        setLoading(true)
        const res= await axios.get(api)
        console.log(res.data);
        setUsers(res.data)
        setLoading(false)
        
    }catch(error){
        console.error(error);
        setError(error);
        setLoading(false)
        
    };
}
fetchUsers()
  },[])

  const deleteUsers =async (_id)=> {
    const confirm =window.confirm('Are you sure to delete this user?')
    if(!confirm) return;
    try{
        await axios.delete(`https://students-learning-api.onrender.com/api/auth/delete/${_id}`)
    }
    catch (error){
        console.error(error);
        alert("Failed to delete user")
        
    }
  }
  if (loading) return <CircularProgress />;

//   // 🔹 Fake static users data
//   const [users] = useState([
//     {
//       _id: "1",
//       firstName: "John",
//       lastName: "Doe",
//       email: "john.doe@example.com",
//     },
//     {
//       _id: "2",
//       firstName: "Jane",
//       lastName: "Smith",
//       email: "jane.smith@example.com",
//     },
//     {
//       _id: "3",
//       firstName: "Michael",
//       lastName: "Johnson",
//       email: "michael.johnson@example.com",
//     },
//     {
//       _id: "4",
//       firstName: "Emily",
//       lastName: "Brown",
//       email: "emily.brown@example.com",
//     },
//     {
//       _id: "5",
//       firstName: "Daniel",
//       lastName: "Wilson",
//       email: "daniel.wilson@example.com",
//     },
//   ]);

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        All Registered Users
      </Typography>

      <TableContainer className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>S/N</b>
              </TableCell>
              <TableCell>
                <b>ID</b>
              </TableCell>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Email</b>
              </TableCell>
              <TableCell align="center">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <TableRow key={user._id}>
                  <TableCell>{index+1}</TableCell>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        // onClick={() => navigate(/users/${user._id})}
                      >
                        View
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        // onClick={() => navigate(`/userlist/edit/${user._id}`)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => console.log("Delete clicked")}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Userslist
