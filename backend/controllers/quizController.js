import Quiz from "../models/Quiz.js";

export const getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find().populate("course");
  res.json(quizzes);
};

export const createQuiz = async (req, res) => {
  const quiz = await Quiz.create(req.body);
  res.json(quiz);
};
