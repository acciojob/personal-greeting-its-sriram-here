
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [text,setText] = useState("");
  return (
    <div className="p-4">
        {/* Do not remove the main div */}
    <label>Enter your name:</label>
    <input type="text" value={text} 
    onChange={(e) => setText(e.target.value)} />
      <p>Hello {text}! </p>
    </div>
  )
}

export default App
