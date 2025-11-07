import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav
      className={`p-4 shadow-md flex justify-between items-center ${
        dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="font-bold text-2xl">EduFlex</h1>

      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/courses" className="hover:text-blue-500">Courses</Link>
        <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
        <Link to="/quizzes" className="hover:text-blue-500">Quizzes</Link>

        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/profile"
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        )}
      </div>

      <button
        onClick={() => setDark(!dark)}
        className="ml-4 border px-3 py-1 rounded"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
