import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your actual validation logic
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid email or password');
    }
  };

  if (isAuthenticated) {
    return <Dashboard />;
  } else {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
};

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>You are now logged in.</p>
    </div>
  );
};

export default App;
