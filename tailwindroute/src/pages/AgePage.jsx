import useAge from "../hooks/useAge";

export default function AgePage() {
  const { birthYear, setBirthYear, age, calculateAge } = useAge();

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-stone-800 mb-8">나이 계산기</h1>

      <input
        className="border border-stone-300 bg-stone-50 p-2 m-2"
        placeholder="출생년도"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
      />

      <button onClick={calculateAge} className="bg-amber-200 text-stone-800 px-4 py-2 rounded">
        계산
      </button>

      {age && <p className="mt-6 text-stone-700 ">나이: {age}살</p>}
    </div>
  );
}