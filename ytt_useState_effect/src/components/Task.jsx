import React, { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([
    "Apple",
    "Mango",
    "Oranges",
    "Grapes",
    "Papaya",
    "Guava"
  ]);

  const sortLeast = () => {
    const sorted = [...fruits].sort(); // A–Z sorting
    setFruits(sorted);
  };

  return (
    <div>
      <h2>Sorting</h2>

      <button onClick={sortLeast}>Sort Least</button>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;