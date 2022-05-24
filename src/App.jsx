import React, { useState, useEffect } from 'react';
import './App.css';
import ContactCard from "./components/contact-card";


function App() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
  .then(response => response.json())
  .then(data => setResults(data.results)).catch(err => console.log(err)) 
  }, [])
  
  
  return (
    <main>
      {results.map((result, index) => {
      return(
        <ContactCard
        picture = {result.picture.large}
        name = {result.name.title + " " + result.name.first +  " " + result.name.last}
        email ={result.email}
        age = {result.dob.age}
          key = {index}
        />
      )
      })}
    </main>
  );
}

export default App;