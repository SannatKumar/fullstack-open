import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return(
    <div>
      <p>{props.name}, You are {props.age} years old.</p>
    </div>
  )
}
const App = () => {
  const name= 'Maya';
  const age= 32;
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age= {age} />
      <Hello name="Raj Kumar" age = "25" />
      <Hello name="Krishna" age = {25+6}/>
    </div>
  )
}
ReactDOM.render(<App />,  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

