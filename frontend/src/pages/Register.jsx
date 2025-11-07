import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // ✅ async handler function, not async component
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Wait for backend response
      await api.post("/auth/register", formData);

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Error registering user");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Create Your Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 p-3 mb-4 w-full rounded"
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-3 mb-4 w-full rounded"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-3 mb-6 w-full rounded"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button className="bg-green-600 w-full text-white py-3 rounded hover:bg-green-700">
          Sign Up
        </button>
      </form>
    </div>
  );
}
