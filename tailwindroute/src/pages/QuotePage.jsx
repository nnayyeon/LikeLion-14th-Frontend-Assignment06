import useRandomQuote from "../hooks/useRandomQuote";

export default function QuotePage() {
  const { quote, changeQuote } = useRandomQuote();

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">랜덤 명언</h1>
      <p className="mb-4 text-lg">{quote}</p>
      <button onClick={changeQuote} className="bg-amber-200 text-stone px-4 py-2 rounded">
        명언 바꾸기
      </button>
    </div>
  );
}