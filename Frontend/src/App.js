import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import './App.css'; // Ensure your CSS handles these components

function App() {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="App">
      <h1>{isRegistered ? 'Login' : 'Register'}</h1>
      {isRegistered ? <LoginForm /> : <RegistrationForm />}
      <button className="toggle-button" onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? 'Need to register?' : 'Already registered?'}
      </button>
    </div>
  );
}

export default App;
