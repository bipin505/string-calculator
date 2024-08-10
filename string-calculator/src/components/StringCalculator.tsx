import React, { useState } from "react";
import { add } from "../StringCalculator";

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      setError(null);
      const normalInput =input.replace(/\\n/g,'\n');
      const sum = add(normalInput);
      setResult(sum);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
        style={{ padding: "16px", marginRight: "8px" }}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default StringCalculator;
