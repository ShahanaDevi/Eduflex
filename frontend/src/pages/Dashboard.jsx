import { courses } from "../data/courses";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = { name: "John Doe", email: "john@example.com" };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome, {user.name} 👋</h1>
      <p className="text-gray-600 mb-8">
        Track your learning progress and take quizzes to improve your skills.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div
            key={c.id}
            className="bg-white shadow-md rounded-lg border border-gray-100 p-5"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {c.title}
            </h2>
            <ProgressBar progress={c.progress} />
            <p className="text-gray-500 text-sm mb-4">{c.description}</p>
            <p className="text-sm text-blue-600 font-semibold mb-3">
              Progress: {c.progress}%
            </p>
            <Link
              to="/quizzes"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Take Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
