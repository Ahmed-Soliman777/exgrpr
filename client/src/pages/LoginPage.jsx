// Importing necessary components and styles
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginPage.css';
import '../style.css';

import upperImage from '../assets/images/UpperLoginImg.png'
import lowerImage from '../assets/images/LowerLoginImg.png'
import LoginCard from '../components/LoginCard';

const LoginPage = () => {

  return (
    // Section for the login page with background color and flex properties
    <section className='main-bg-color vh-100 w-100 d-flex justify-content-center align-items-center position-relative'>

      <img
        src={upperImage}
        alt="login-img"
        className='position-absolute top-0 start-0 fit-content-img' />

      <img
        src={lowerImage}
        alt="login-img"
        className='position-absolute bottom-0 end-0 fit-content-img' />

      <LoginCard />

    </section>
  );
}

// Exporting the LoginPage component
export default LoginPage;
