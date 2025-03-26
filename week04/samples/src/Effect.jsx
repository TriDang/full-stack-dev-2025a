import { useState, useEffect } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      fetch(`https://catfact.ninja/fact`)
        .then((res) => res.json())
        .then((json) => alert(json.fact));
    }
  });

  return (
    <div>
      <h1>Effect</h1>
      <button onClick={() => setCount(count + 1)}>Get a new fact about cat</button>
      <p>Get {count} facts already</p>
    </div>
  );
}