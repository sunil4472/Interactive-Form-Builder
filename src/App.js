import React from 'react';
import Form from './Form';
import './App.css';


function App() {
  const handleResponse = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <div className="App">
      <h1>Form Validation Application</h1>
      <Form onResponse={handleResponse} />
    </div>
  );
}

export default App;
