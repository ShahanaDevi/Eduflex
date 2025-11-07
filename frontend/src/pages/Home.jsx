import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-20 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-6">
        Welcome to EduFlex
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Empower your learning journey with our interactive, modern MERN-based
        e-learning platform. Enroll in courses, take quizzes, and track your
        progress — all in one place.
      </p>
      <Link
        to="/courses"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Explore Courses
      </Link>
    </div>
  );
}
