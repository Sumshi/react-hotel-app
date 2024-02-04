import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css';
// importing image
import BannerImage from "../assets/pizza.jpeg";

function Home() {
  return (
    // adding backkground image
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>Pizza Hut</h1>
        <p>Bless your tastebuds with our pizza</p>
        <Link to='/menu'>
              <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
