import express from "express";
import { getQuizzes, createQuiz } from "../controllers/quizController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", protect, getQuizzes);
router.post("/", protect, adminOnly, createQuiz);
export default router;
