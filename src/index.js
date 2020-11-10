import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
  const now = new Date();
  const a = 5;
  const b = 10;

  return(
    <div>
      <p>Hello World, It is {now.toString()}</p>
      <p> {a} + {b} is {a + b}.</p>
    </div>
  )
}
ReactDOM.render(<App />,  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

