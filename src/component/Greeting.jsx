import React, { useState } from 'react';
function Greeting() {
  const [name, setName] = useState('kavin');
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Hello, {name}!</p>
    </div>
  );
}
export default Greeting;