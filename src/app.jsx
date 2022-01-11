import React from 'react';
import './app.css';

function App() {
  const user ='sidney';
  const name = undefined;
  return (
    // <React.Fragment></React.Fragment></React.Fragment> 
    <> 
      <h1 className='title' onClick="" >Hello {user} :)</h1>
      {user && <h1>Hello! {user} :) </h1>}
      {user && <h1>Hello! {name} :) </h1>}
      {
        ['💚','💤'].map(item => <h2>{item}</h2>)
      }
    </>  
  );
}

export default App;
 