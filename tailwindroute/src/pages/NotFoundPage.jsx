import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">404</h1>
      <p className="mb-4">페이지를 찾을 수 없습니다.</p>
      <Link to="/" className="text-blue-500 underline">
        홈으로 이동
      </Link>
    </div>
  );
}