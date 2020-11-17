import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return(
    <div>
      <p>Hello Universe.</p>
      <p>{props.name}</p>
    </div>
  )
}
const App = () => {
  return(
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello name="Raj Kumar"/>
      <Hello name="Krishna"/>
    </div>
  )
}
ReactDOM.render(<App />,  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

