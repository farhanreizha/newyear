import { useState } from "react";
import "./App.css";
import Countdownlist from "./components/Countdownlist";
import Fireworks3 from "./components/Fireworks3";

function App() {
  const [countdown, setCountdown] = useState(false);
  return (
    <div className="container">
      {countdown ? <Fireworks3 /> : null}
      <Countdownlist setCountdown={setCountdown} countdown={countdown}/>
    </div>
  );
}

export default App;
