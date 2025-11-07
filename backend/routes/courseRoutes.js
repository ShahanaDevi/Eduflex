import express from "express";
const router = express.Router();

let courses = [
  { id: 1, title: "Full Stack Web Dev", description: "Build MERN apps" },
  { id: 2, title: "Data Structures", description: "Master DSA" },
  { id: 3, title: "UI/UX Design", description: "Design great interfaces" }
];

let enrolled = [];

router.get("/", (req, res) => res.json(courses));

router.post("/enroll", (req, res) => {
  const { courseId, userEmail } = req.body;
  if (!courseId || !userEmail)
    return res.status(400).json({ message: "Missing fields" });

  enrolled.push({ courseId, userEmail });
  res.json({ message: "Enrolled successfully!" });
});

router.get("/enrolled/:email", (req, res) => {
  const userEmail = req.params.email;
  const userCourses = enrolled
    .filter((e) => e.userEmail === userEmail)
    .map((e) => courses.find((c) => c.id === e.courseId));
  res.json(userCourses);
});

export default router;
