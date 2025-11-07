import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizzes } from "../data/quizzes";

export default function Quizzes() {
  const [selectedQuiz, setSelectedQuiz] = useState(quizzes[0]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let sc = 0;
    selectedQuiz.questions.forEach((q, i) => {
      if (answers[i] === q.answer) sc++;
    });
    setScore(sc);
  };

  const handleRetake = () => {
    setAnswers({});
    setScore(null);
  };

  if (score !== null) {
    const total = selectedQuiz.questions.length;
    const percentage = Math.round((score / total) * 100);
    const message =
      percentage >= 80
        ? "🌟 Excellent work! You really know your stuff!"
        : percentage >= 50
        ? "👍 Good effort! Keep practicing."
        : "💪 Don’t worry! Review the material and try again.";

    return (
      <div className="max-w-3xl mx-auto px-6 py-10 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Quiz Results</h1>
        <p className="text-xl mb-2">Score: {score} / {total}</p>
        <p className="text-lg mb-2">Percentage: {percentage}%</p>
        <p className="text-md text-gray-600 mb-6">{message}</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleRetake}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        {selectedQuiz.title}
      </h1>

      <form onSubmit={handleSubmit}>
        {selectedQuiz.questions.map((q, i) => (
          <div key={i} className="mb-6 bg-white shadow p-5 rounded-lg border">
            <h2 className="text-lg font-semibold mb-3">
              {i + 1}. {q.question}
            </h2>
            {q.options.map((opt) => (
              <label
                key={opt}
                className="block text-gray-700 mb-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name={`q-${i}`}
                  value={opt}
                  checked={answers[i] === opt}
                  onChange={(e) =>
                    setAnswers({ ...answers, [i]: e.target.value })
                  }
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700"
        >
          Submit Quiz
        </button>
      </form>
    </div>
  );
}
