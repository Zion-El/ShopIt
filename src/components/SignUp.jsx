import React, { useState } from 'react';
import SignUpImg from '../assets/images/SignUP.jpeg'
import { Alert } from 'react-bootstrap';

const SignUpForm = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!FirstName || !LastName || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      // Submit form data to the server or perform other actions
      console.log('Form submitted:', email, password, confirmPassword);
    }
  };

  return (
    <div>
    <div className="container mb-5">
        <div className="row py-3">
            <div className="col-md-5  d-flex align-items-center justify-content-center">
                <img src={SignUpImg} alt="Contact Us" height="300px" width="300px" />
            </div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    <div class="mb-3">
                        <label for="exampleForm" class="form-label">First Name</label>
                        <input type="text" class="form-control" value={(e)=>setFirstName(e.target.value)} id="exampleForm" placeholder="John"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleForm" class="form-label">Last Name</label>
                        <input type="text" class="form-control" value={(e)=>setLastName(e.target.value)} id="exampleForm" placeholder="Smith"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleForm" class="form-label">Phone Number</label>
                        <input type="text" class="form-control"  id="exampleForm" placeholder="+234 8160765447"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" value={(e)=>setEmail(e.target.value)} id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleForm" class="form-label">Password</label>
                        <input type="text" class="form-control" value={(e)=>setPassword(e.target.value)} id="exampleForm" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleForm" class="form-label">Confirm Password</label>
                        <input type="text" class="form-control" value={(e)=>setConfirmPassword(e.target.value)} id="exampleForm"/>
                    </div>

                      <button type="submit" class="btn btn-dark">Sign Up</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  );
};

export default SignUpForm;
