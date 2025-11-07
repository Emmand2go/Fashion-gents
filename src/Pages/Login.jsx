import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login=({ setIsAuthenticated })=> {
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState('')
const [password, setPassword] =useState('')
const [loading, setLoading] =useState(false)
const [error, setError] = useState('')
const [alert, setAlert] = useState({ message: "", type: "" });


  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   // Simple login validation (local)
  //   if (email === "admin@example.com" && password === "123456") {
  //     // Save a dummy token to pretend the user is authenticated
  //     localStorage.setItem("token", "dummy_token");
  //     // Redirect to the dashboard (main page)
  //     navigate("/dashboard");
  //   } else {
  //     alert("Invalid credentials");
  //   }
  // };

    // Redirect automatically if already authenticated..this was making my logout not to function properly
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsAuthenticated(true);
  //     navigate("/home");
  //   }
  // }, [setIsAuthenticated, navigate]);

let loginLogic = async (e) =>{
  e.preventDefault();
  setLoading(true)
  setError("")
  try {
    const response= await axios.post("https://students-learning-api.onrender.com/api/auth/login",
      {email,
      password,}
    );
    // Testing 58-61 whether my details is loggedin after browser shutdown
    const { token, user } = response.data;
      // Store token and user info in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

    setIsAuthenticated(true);
    window.alert('More development coming soon');
     
    

      // // ✅ Store login info
      // localStorage.setItem("token", token);
      // localStorage.setItem("user", JSON.stringify(user));

      // console.log(data);
    navigate('/home');} 
    catch (error) {
      console.error(error.response?.data?.error || error.message);
      setError(error.response?.data?.error || "Login failed");
    }finally{
      setLoading(false)
    }
};
//  if (loading) return <CircularProgress />;

  return (
    <>
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1565c0, #42a5f5)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        marginLeft: "auto",
        marginRight: "auto",
        p: 2,
      }}
    >
       <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      > 
        <Paper
          elevation={10}
          sx={{
            p: { xs: 4, sm: 5 },
            width: { xs: "90%", sm: 400 },
            borderRadius: "20px",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Lock Icon */}
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1976d2, #42a5f5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
              boxShadow: "0 4px 20px rgba(25, 118, 210, 0.5)",
            }}
          >
            <LockOutlined sx={{ fontSize: 40, color: "#fff" }} />
          </Box>

          {/* Title change on 95*/}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 3, color: "#0d47a1" }}
          >
            {error ? error :'Welcome Back'}
          </Typography>

          {/* Email Input */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": { borderRadius: "12px" },
            }}
          />

          {/* Password Input */}
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            variant="outlined"
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": { borderRadius: "12px" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={loginLogic}
            sx={{
              py: 1.4,
              fontWeight: "bold",
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "1rem",
              background: "linear-gradient(135deg, #1976d2, #0d47a1)",
              boxShadow: "0 6px 25px rgba(13, 71, 161, 0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #1565c0, #0d47a1)",
              },
            }}
          >
            {/* Login */}
            {loading ? <CircularProgress size={26} color="inherit" /> : "Login"}
          </Button>

          {/* Footer Text */}
          <Typography
            variant="body2"
            sx={{ mt: 3, color: "text.secondary", textAlign: "center" }}
          >
            Don’t have an account?{" "}
            <a
              href="/register"
              style={{
                color: "#1976d2",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign up
            </a>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
    </>
  );
}

export default Login;