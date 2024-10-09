import "./dashboardLogin.css";
import { useState } from "react";
import eduBackground from "../assets/edu_background.svg";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DashboardLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
try{

  
      const response = await axios.post('https://api.edu-bridge.org.uk/auth/signin', 
        {
        email:"mas@gmail.com",
        password:"123454321",
      });

      localStorage.setItem('token', response.data.token);

      console.log(response)
navigate('/dashboard')
    }
    catch (error) {
      
      console.error('ERROR IN LOGIN', error);
    }
   };

 
  return (
    <div className="dashboard-login">
      <div className="dashboard-login-container">
        <h1 className="dashboard-login-title">Login</h1>
        <form
         onSubmit={handleLogin}
          className="dashboard-login-input-container"
        >
          <div className="dashboard-input-label-container">
            <label htmlFor="email">Email</label>
            <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
          </div>

          <div className="dashboard-input-label-container">
            <label htmlFor="password">Password</label>
            <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
          </div>
          <div className="dashboard-login-submit">
            <button type="submit" className="dashboard-login-submit-btn">
         Login
          
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardLogin;
