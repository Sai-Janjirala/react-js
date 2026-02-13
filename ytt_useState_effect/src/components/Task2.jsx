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

  const handleSortChange = (e) => {
    const value = e.target.value;

    if (value === "az") {
      const sortedFruits = [...fruits].sort((a, b) =>
        a.localeCompare(b)
      );
      setFruits(sortedFruits);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sorting</h2>

      <label>
        SORT BY:{" "}
        <select onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="az">A → Z</option>
        </select>
      </label>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;