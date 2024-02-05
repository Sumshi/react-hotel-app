import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}>
      </div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>
          We are a small pizza place with a big heart. We love pizza and we want to share our love of pizza with the world. We make all of our pizzas with fresh ingredients and we offer a variety of toppings and crusts. We have something for everyone. We also offer gluten-free and vegan options. Our goal is to make the best pizza you've ever had. We hope you enjoy our pizza as much as we enjoy making it.
        </p>
      </div>
    </div>
  );
}

export default About;
