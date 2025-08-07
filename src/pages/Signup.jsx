import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API call
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}

export default Signup;
