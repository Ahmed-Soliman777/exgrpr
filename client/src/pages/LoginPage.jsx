// Importing necessary components and styles
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginPage.css';

import upperImage from '../assets/images/UpperLoginImg.png'
import lowerImage from '../assets/images/LowerLoginImg.png'
import LoginCard from '../components/LoginCard';


// Functional component for the LoginPage
const LoginPage = () => {

  const navigate = useNavigate();
  const [userType, setUserType] = useState(''); // State to track the selected user type
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {


    // Clear input fields
    setEmail('');
    setPassword('');
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.id);
  };

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
