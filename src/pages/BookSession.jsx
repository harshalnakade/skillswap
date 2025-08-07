import React, { useState } from 'react';

function BookSession() {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    console.log({ selectedSkill, time }); // Replace with backend booking logic
  };

  return (
    <form onSubmit={handleBooking}>
      <h2>Book a Session</h2>
      <input type="text" placeholder="Skill Name" onChange={(e) => setSelectedSkill(e.target.value)} />
      <input type="datetime-local" onChange={(e) => setTime(e.target.value)} />
      <button type="submit">Book</button>
    </form>
  );
}

export default BookSession;
