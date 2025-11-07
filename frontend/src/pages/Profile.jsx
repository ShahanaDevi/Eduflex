import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    password: "",
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("✅ Profile updated (demo)");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Profile Settings
        </h2>

        <label className="block mb-2 font-semibold">Name</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="border p-3 mb-4 w-full rounded"
        />

        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          value={user.email}
          disabled
          className="border p-3 mb-4 w-full rounded bg-gray-100"
        />

        <label className="block mb-2 font-semibold">New Password</label>
        <input
          type="password"
          placeholder="********"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="border p-3 mb-6 w-full rounded"
        />

        <button className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700">
          Update Profile
        </button>
      </form>
    </div>
  );
}
