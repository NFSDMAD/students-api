const express = require("express");
const Course = require("../models/course");
const Student = require("../models/student");

const coursesRouter = express.Router();

coursesRouter.get("/", (req, res) => {
  Course.find()
    .populate("students")
    .then((courses) => {
      res.json(courses);
    });
});

coursesRouter.post("/", (req, res) => {
  const courseData = req.body;
  const course = new Course(courseData);
  course.save().then((result) => {
    res.json(course);
  });
});

module.exports = coursesRouter;
