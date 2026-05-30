import { useState } from "react";

export default function useAge() {
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    setAge(currentYear - Number(birthYear));
  };

  return { birthYear, setBirthYear, age, calculateAge };
}