import React from "react";
import ReactDOM from "react-dom";
import TheDate from "./state/TheDate.js";
import Counter from "./state/Counter.js";

function App() {
  return (
    <div className="App">
      <TheDate>Test</TheDate>
      <h1>Hello World</h1>
      <Counter />
      {/* <p>If only that was the case?</p> */}
      {/* <h2>Start eediting to see some magic happen!</h2> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
