import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  questions: [
    {
      questionText: String,
      options: [String],
      correctAnswer: String,
    },
  ],
});

export default mongoose.model("Quiz", quizSchema);
