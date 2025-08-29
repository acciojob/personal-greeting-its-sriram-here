
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
     <p>Enter your name:</p>
     <input
       type="text"
       value={name}
       onChange={(e) => setName(e.target.value)}
     />
     {name ? <p>Hello {name}!</p> : null}
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
