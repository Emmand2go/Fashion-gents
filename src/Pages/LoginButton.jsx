import React from 'react'
import { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";

// function LoginButton() {
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null);

//   const loginLogic = async () => {
//     try {
//       setLoading(true);
//       setMessage(null);

//       // simulate async login (replace with real API call)
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       // Example success
//       setMessage({ type: "success", text: "Login successful!" });
//     } catch (error) {
//       setMessage({ type: "error", text: "Login failed. Please try again." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Button
//         fullWidth
//         variant="contained"
//         size="large"
//         onClick={loginLogic}
//         disabled={loading}
//         sx={{
//           py: 1.4,
//           fontWeight: "bold",
//           borderRadius: "12px",
//           textTransform: "none",
//           fontSize: "1rem",
//           background: "linear-gradient(135deg, #1976d2, #0d47a1)",
//           boxShadow: "0 6px 25px rgba(13, 71, 161, 0.4)",
//           transition: "all 0.2s ease-in-out",
//           "&:hover": {
//             background: "linear-gradient(135deg, #1565c0, #0d47a1)",
//           },
//           "&:active": {
//             transform: "scale(0.97)",
//           },
//         }}
//       >
//         {loading ? <CircularProgress size={26} color="inherit" /> : "Login"}
//       </Button>

//       {/* Responsive user feedback */}
//       <Snackbar
//         open={!!message}
//         autoHideDuration={3000}
//         onClose={() => setMessage(null)}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//       >
//         {message && (
//           <Alert
//             onClose={() => setMessage(null)}
//             severity={message.type}
//             variant="filled"
//             sx={{ width: "100%" }}
//           >
//             {message.text}
//           </Alert>
//         )}
//       </Snackbar>
//     </>
//   );
// }

// Another ONE

function LoginButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
const loginLogic = async () => {
  try {
    setLoading(true);
    setMessage(null);

    const response = await axios.post("https://fullstack-student-backend.onrender.com/api/auth/login",
       {
      email,
      password,
    },
  
{
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 100000, // optional: 10-second timeout
        }  );

    const data = response.data; // Axios already parses JSON

    // // Save token/session if needed
    // localStorage.setItem("authToken", data.token);

    setMessage({ type: "success", text: "Login successful!" });
  } catch (error) {
    // Axios errors have `error.response` if server responded with a status code
    const errorMsg =
      error.response?.data?.message ||
      error.message ||
      "Login failed. Please try again.";
    setMessage({ type: "error", text: errorMsg });
  } finally {
    setLoading(false);
  }
};

 return (
    <>
      <Button
        fullWidth
        variant="contained"
        size="large"
        onClick={loginLogic}
        disabled={loading}
        sx={{
          py: 1.4,
          fontWeight: "bold",
          borderRadius: "12px",
          textTransform: "none",
          fontSize: "1rem",
          background: "linear-gradient(135deg, #1976d2, #0d47a1)",
          boxShadow: "0 6px 25px rgba(13, 71, 161, 0.4)",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            background: "linear-gradient(135deg, #1565c0, #0d47a1)",
          },
          "&:active": {
            transform: "scale(0.97)",
          },
        }}
      >
        {loading ? <CircularProgress size={26} color="inherit" /> : "Login"}
      </Button>

      <Snackbar
        open={!!message}
        autoHideDuration={3000}
        onClose={() => setMessage(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {message && (
          <Alert
            onClose={() => setMessage(null)}
            severity={message.type}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {message.text}
          </Alert>
        )}
      </Snackbar>
    </>
  );
}



export default LoginButton;