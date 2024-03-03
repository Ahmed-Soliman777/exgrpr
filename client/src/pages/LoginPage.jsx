// Importing necessary components and styles
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { ArrowRight } from 'react-bootstrap-icons';
import '../style.css';

import upperImage from '../assets/images/UpperLoginImg.png'
import lowerImage from '../assets/images/LowerLoginImg.png'
import { Button } from 'react-bootstrap';
import CardItem from '../components/CardItem';


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
    <section className='login-bg-color vh-100 w-100 d-flex justify-content-center align-items-center position-relative'>

      <img
        src={upperImage}
        alt="login-img"
        className='position-absolute top-0 start-0 fit-content-img' />

      <img
        src={lowerImage}
        alt="login-img"
        className='position-absolute bottom-0 end-0 fit-content-img' />

      <CardItem />
      {/* Card component for the login form with various styling classes */}
      {/* <Card
        className='card-size
        drop-shadow-card 
        rounded
        d-flex 
        justify-content-center 
        card-bgcolor 
        position-relative
        rounded'
      >
        <Card.Body>
          <img
            src=""
            alt="user-img"
            className='position-absolute top-0 start-50 translate-middle  card-image-size rounded-circle blackk '
          />
          <Form className='margin-top-5'>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className='m-2 bg-transparent text-center border-0 border-bottom'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className='m-2 bg-transparent text-center border-0 border-bottom'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Form.Group>

            <fieldset>
              <Form.Group as={Row} className="m-2">
                <Col className='d-flex justify-content-around'>
                  <Form.Check
                    type="radio"
                    label="Student"
                    name="formHorizontalRadios"
                    id="student"
                    onChange={handleUserTypeChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Professor"
                    name="formHorizontalRadios"
                    id="professor"
                    onChange={handleUserTypeChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Admin"
                    name="formHorizontalRadios"
                    id="admin"
                    onChange={handleUserTypeChange}
                  />
                </Col>
              </Form.Group>

              <div className='d-flex justify-content-center align-items-center flex-column m-3'>
                <Form.Check label="Remember me" />

                <Button
                  type="submit"
                  onClick={handleLogin}
                  className='btn
                  btn-primary
                  w-25 
                  position-absolute 
                  top-100 start-50 
                  translate-middle 
                  rounded-pill 
                  text-uppercase'
                >
                  login
                  <ArrowRight className='pl-5' />
                </Button>
              </div>
            </fieldset>
          </Form>
        </Card.Body>
      </Card> */}
    </section>
  );
}

// Exporting the LoginPage component
export default LoginPage;
