import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Home page</h1>
      <div>Isto é o tipo de letra para o texto longo.</div>
      <button> button </button>
    </div>
  );
}

export default App;
