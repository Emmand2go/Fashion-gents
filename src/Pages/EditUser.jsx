import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
  const { id } = useParams(); // get user ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    // Fetch single user by ID
    axios
      .get(`https://students-learning-api.onrender.com/api/auth/${id}`)
      .then((response) => setFormData(response.data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://students-learning-api.onrender.com/api/auth/${id}`, formData)
      .then(() => {
        alert("User updated successfully!");
        navigate("/userlist"); // go back to user list
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Save Changes
        </Button>
      </form>
    </div>
  );
}