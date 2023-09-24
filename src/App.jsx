import { useState } from "react";
import PasswordGenerator from "./components/generator";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PasswordGenerator />
    </>
  );
}

export default App;
