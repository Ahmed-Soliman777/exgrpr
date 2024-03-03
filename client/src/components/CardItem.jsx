import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { ArrowRight } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardItem = () => {
    const [userType, setUserType] = useState(''); // State to track the selected user type
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {

        navigate("/dashboard")
        // Clear input fields
        setEmail('');
        setPassword('');
    };

    const handleUserTypeChange = (event) => {
        setUserType(event.target.id);
    };

    return (
        <Card
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
                {/* User image position absolute on the top center of the card */}
                <img
                    src=""
                    alt="user-img"
                    className='position-absolute top-0 start-50 translate-middle  card-image-size rounded-circle blackk '
                />
                {/* Form for user login with email, password, and role selection */}
                <Form className='margin-top-5'>
                    {/* Email input field */}
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

                    {/* Password input field */}
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

                    {/* Role selection radio buttons */}
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

                        {/* Remember me checkbox and login button */}
                        <div className='d-flex justify-content-center align-items-center flex-column m-3'>
                            <Form.Check label="Remember me" />

                            {/* Login button with link styling */}
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
        </Card>
    )
}

export default CardItem