import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navStyle = ({ isActive }) =>
    isActive
      ? "bg-amber-200 text-stone-800 px-4 py-2 rounded"
      : "bg-white text-stone-600 px-4 py-2 rounded border";

  return (
    <nav className="p-4 flex gap-3 justify-center bg-stone-100">
      <NavLink to="/" className={navStyle}>홈</NavLink>
      <NavLink to="/quote" className={navStyle}>랜덤 명언</NavLink>
      <NavLink to="/bmi" className={navStyle}>BMI 계산기</NavLink>
      <NavLink to="/age" className={navStyle}>나이 계산기</NavLink>
    </nav>
  );
}