import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./assets/components/Button.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo" alt="React logo" />
      </a>
      {/* Fix the button below   */}
      <Button
        onClick={() => {
          console.log(count);
          setCount((count) => count + 1);
        }}
      >
        Increment
      </Button>
      <p>count is: {count}</p>
      <p>What?</p>
    </>
  );
}

export default App;
