import Course from "../models/Course.js";

export const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

export const createCourse = async (req, res) => {
  const { title, description, lessons } = req.body;
  const course = await Course.create({
    title,
    description,
    lessons,
    createdBy: req.user._id,
  });
  res.json(course);
};
