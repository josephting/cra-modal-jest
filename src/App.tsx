import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [show, setShow] = useState(false);
  const onHide = () => {
    setShow(false);
  };
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Open</button>
      {show && <Modal show={show} onHide={onHide} />}
    </div>
  );
}

export default App;
