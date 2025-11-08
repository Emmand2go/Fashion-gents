// import { Margin } from "@mui/icons-material";
import React from "react";


// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <p>Welcome to the Contact Page for MyBrand Contact us here.</p>
//     </div>
//   );
// }
// export default Contact
import { FaEnvelope, FaPhone, FaComments } from "react-icons/fa";

const Contact = () => (
  <div className="contact-methods" style={{
    margin:'0',
  display: 'flex',
  justifyContent:'space-evenly',
  alignContent:'center',
  marginTop: '5rem',
  minWidth:'10rem',
  gap:'3rem'
  }}

>
    <div className="method">
      <FaEnvelope size={24} />
      <h2>Email Us</h2>
      <p>Ndubuisiemmanuel211@yahoo.com</p>
    </div>
    <div className="method">
      <FaPhone size={24} />
      <h2>Call Us</h2>
      <p>1-800-123-4567</p>
    </div>
    {/* <div className="method">
      <FaComments size={24} />
      <h2>Chat</h2>
      <p>Chat with support</p>
    </div> */}
    <div className="method">
  <FaComments size={24} />
  <h2>WhatsApp Chat</h2>
  <p>
    <a
      href="https://wa.link/me69rv"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "black", textDecoration: "none", fontWeight: "500", border:"none" }}
    >
      Message our support team on WhatsApp
    </a>
  </p>
</div>
  </div>
);

export default Contact
