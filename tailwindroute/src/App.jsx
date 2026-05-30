import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";
import BmiPage from "./pages/BmiPage";
import AgePage from "./pages/AgePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-100">
      {/* 과제 조건 5. 컴포넌트 분리 */}
      <Navbar />

      {/* 과제 조건 2. React Router 사용 */}
      <Routes>
        {/* 과제 조건 1. 메인 홈(/) 제작 */}
        <Route path="/" element={<HomePage />} />

        {/* 과제 조건 2. 최소 4개 이상의 페이지 구성 */}
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/bmi" element={<BmiPage />} />
        <Route path="/age" element={<AgePage />} />

        {/* 과제 조건 6. 404 에러 페이지 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}