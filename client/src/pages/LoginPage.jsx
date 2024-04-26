// Importing necessary components and styles
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginPage.css';
import '../style.css';

import upperImage from '../assets/images/UpperLoginImg.png'
import lowerImage from '../assets/images/LowerLoginImg.png'
import LoginCard from '../components/LoginCard';

const Signin = () => {
  // Initialize state for form data using the useState hook
  const [formData, setFormData] = useState({})

  // Commented out state for error and loading
  // const [error, setError] = useState(false)
  // const [loading, setLoading] = useState(false)

  // Use the useNavigate hook to navigate to different routes
  const navigate = useNavigate()

  // Handle changes in the form fields and update the state
  const handleChange = (event) => {
    setFormData({
     ...formData, [event.target.id]: event.target.value
    })
  }

  // Handle form submission
  const handleSubmit = async (event) => {

    // Prevent the default form submission behavior
    event.preventDefault();

    try {
      // Send a POST request to the /api/auth/signin endpoint with the form data
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      // Parse the response as JSON
      const data = await res.json()

      // Commented out code to set loading to false and log the response data
      // console.log(data)
      // setLoading(false)

      // Check if the authentication was successful
      if (data.success === false) {
        // Commented out code to set error to true
        // setError(true)
        return;
      }

      // Dispatch the singInSuccess action with the response data
      dispatch(singInSuccess(data))

      // Navigate to the root route
      navigate("/")
    } catch (error) {
      // Commented out code to set loading and error to false
      // setLoading(false)
      // setError(true)
    }
  }
}

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
