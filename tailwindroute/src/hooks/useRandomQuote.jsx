import { useState } from "react";

export default function useRandomQuote() {
  const quotes = [
    "포기하지 않으면 기회는 온다.",
    "작은 시작이 큰 변화를 만든다.",
    "오늘의 노력이 내일의 결과가 된다.",
    "실패는 성공으로 가는 과정이다.",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return { quote, changeQuote };
}