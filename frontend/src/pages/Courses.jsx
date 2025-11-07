import { useEffect, useState } from "react";
import api from "../utils/api";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await api.get("/courses");
      setCourses(data);
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || c.category === category;
    return matchesSearch && matchesCategory;
  });

  const handleEnroll = async (id) => {
    const userEmail = localStorage.getItem("userEmail") || "student@example.com";
    await api.post("/courses/enroll", { courseId: id, userEmail });
    alert("✅ Enrolled successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Browse Courses
      </h1>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-3">
        <input
          type="text"
          placeholder="Search courses..."
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded w-full md:w-2/3"
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border p-3 rounded w-full md:w-1/3"
        >
          <option>All</option>
          <option>Development</option>
          <option>Design</option>
          <option>Data</option>
        </select>
      </div>

      {/* Courses List */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredCourses.map((c) => (
          <div
            key={c.id}
            className="bg-white shadow rounded-lg p-5 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{c.title}</h2>
            <p className="text-gray-500 mb-4">{c.description}</p>
            <p className="text-sm text-blue-600 mb-3">Category: {c.category || "General"}</p>
            <button
              onClick={() => handleEnroll(c.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Enroll
            </button>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No courses found matching your criteria.
        </p>
      )}
    </div>
  );
}
