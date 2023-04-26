import './RegisterForm.css';
import React, { useState } from 'react';

const RegisterForm = () => {
    const [formValues, setFormValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formValues);
    };
  
    return (
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
  
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  };
export default RegisterForm;
