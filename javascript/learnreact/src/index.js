import React from 'react';
import ReactDOM from 'react-dom/client';
import Printname from './name'

const root = ReactDOM.createRoot(document.getElementById('root'));

// const name = 'Sofia'


const name = 'Props in React'



// Inline CSS has to be put up inside an object

root.render(
  //JSX
  <>
    <h1>Hello React</h1>
    <h2>This is my first time here, I am so happy to meet you</h2>
    {/* <p>My name is <span style={{ backgroundColor: 'red' }}>{name}</span></p> */}

    {/* <Printname></Printname> */}

    <Printname n = {name} />

  </>
);

