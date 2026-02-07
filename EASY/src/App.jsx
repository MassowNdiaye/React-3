import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Counter App </h1>
        <p className="counter">Current Count: {count}</p>
      </div>

      {/* Buttons Cards */}
      <div className="card">
        {/* Increase Button */}
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          Increment <FontAwesomeIcon icon={faAnglesUp} />
        </button>

        {/* Decrease Button */}
        <button className="btn" onClick={() => setCount((count) => count - 1)}>
          Decrement <FontAwesomeIcon icon={faAnglesDown} />
        </button>

        {/* Instruction */}
        <p className="instructions">
          Click <strong>Increment</strong> to increase the counter and{" "}
          <strong>Decrement</strong> to decrease it.
        </p>
      </div>
    </>
  );
}

export default App;
