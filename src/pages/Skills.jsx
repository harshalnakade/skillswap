import React from 'react';

const dummySkills = [
  { name: 'Guitar', user: 'John Doe' },
  { name: 'Cooking', user: 'Jane Smith' },
];

function Skills() {
  return (
    <div>
      <h2>Available Skills</h2>
      <ul>
        {dummySkills.map((skill, index) => (
          <li key={index}>{skill.name} by {skill.user}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
