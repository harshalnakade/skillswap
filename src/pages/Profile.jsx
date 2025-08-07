import React from 'react';

function Profile() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    skillsOffered: ['Guitar', 'Photography'],
  };

  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <p>Email: {user.email}</p>
      <h3>Skills Offered:</h3>
      <ul>
        {user.skillsOffered.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
