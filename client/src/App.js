// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MultiStepForm from './components/MultiStepForm';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api", {
      method: "GET",
      headers: {
        'Content-Type': "applications/json"
      }
    })
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
      <body>
        <p>
          <MultiStepForm />
        </p>
      </body>
    </div>
  );
}

export default App;