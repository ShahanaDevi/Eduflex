import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 👇 async function INSIDE component
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // "await" pauses until the API call is done
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-lg p-8 w-96 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Login to EduFlex
        </h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-3 mb-4 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 mb-4 w-full rounded"
        />
        <button className="bg-blue-600 w-full text-white py-3 rounded hover:bg-blue-700">
          Sign In
        </button>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
