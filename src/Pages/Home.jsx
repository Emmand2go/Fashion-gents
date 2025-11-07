// export default function Home() {
//   return <h1>Welcome to the Home Page</h1>;
// }

import React from "react";
// import Card from '../Components/Card'
import card from '../Components/Cardpract'
// import Cardpract from "../Components/Cardpract";
import LoginButton from './LoginButton'
import Login from './Login'
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import LoginAlert from '../Pages/LoginAlert'
import { useLocation } from "react-router-dom";

const Home = () => {
  // const location = useLocation();
  // const alert = location.state?.alert;

  //  const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/");
  // };
  return (
    <div>
      {/* {alert && (
        <div className={`alert alert-${alert.type}`}>
          {alert.message}
        </div>
      )} */}
      {/* Welcome Section */}
      <section className="welcome">
        <h1>Home</h1>
        <p>Welcome to the Home page for MyBrandSite! Learn more about what we do here.</p>
        {/* <Button sx={{ mt: 2 }} variant="outlined" onClick={handleLogout}>Logout </Button> */}
      </section>
      {/* <Cardpract/> */}
      {/* Hero Section */}
      <section className="hero">
        <h1>We Create Style that Defines You</h1>
        <p>Explore & design in modern men's fashion. We connect you to different fashion expert</p>
        <a href="#" className="btn">Shop Now</a>
      </section>
      {/* Product Section */}
      <section className="products">
        <h2>Featured Collection</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-EA1Z1S84IySBxMgub6PA0P3j_htwoA_2w&s" alt="Product 1" />
            <h3>Denim Suit</h3>
            <p>$89.99</p>
            <a href="#">Book Now</a>
            <a href="#">More</a>
          </div>
          <div className="product-card">
            <img src="https://www.oriade.co/cdn/shop/files/A52AB286-A28D-4E5F-8D78-483C437007EC.png?v=1748248301&width=1445" alt="Product 2" />
            <h3>Native Wear</h3>
            <p>$129.99</p>
            <a href="#">Book Now</a>
            <a href="#">More</a>
          </div>
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzAEdm7wlLAy8pr8Lr8PGA85ZPLbQkDovmVh5KYzJQF4Zz4NWzWi5IOJBGq7Wo5uTuiY&usqp=CAU" alt="Product 3" />
            <h3>Senator</h3>
            <p>$59.99</p>
            <a href="#">Book Now</a>
            <a href="#">More</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Fally Gent. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default Home