import React, { useState } from 'react';


function ContactCard({ name, email, age, picture}) {
const [showAge, setShowAge] = useState(false);
  const handleClick = e => {
    if(e.target){
    setShowAge(!showAge);
    }
  }

  return (
    <main>
      <div className='contact-card'>
        <img src={picture}></img>
        <div className='user-details'>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <button onClick={e => handleClick(e)}>AGE</button>
          {showAge ? <p>Age: {age}</p> : null} 
        </div>
      </div>
    </main>
  );
}

export default ContactCard;