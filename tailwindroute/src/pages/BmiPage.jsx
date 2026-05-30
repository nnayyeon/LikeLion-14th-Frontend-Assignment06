import { useState } from "react";

export default function BmiPage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBmi = () => {
    const h = Number(height) / 100;
    const result = Number(weight) / (h * h);
    setBmi(result.toFixed(1));
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">BMI 계산기</h1>

      <input
        className="border p-2 m-2"
        placeholder="키(cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        className="border p-2 m-2"
        placeholder="몸무게(kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button onClick={calculateBmi} className="bg-amber-200 text-stone px-4 py-2 rounded">
        계산
      </button>

      {bmi && <p className="mt-4">BMI: {bmi}</p>}
    </div>
  );
}