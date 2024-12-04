const express = require("express");
const Student = require("../models/student");

const studentsRouter = express.Router();

studentsRouter.get("/", (req, res) => {
  Student.find().then((students) => {
    res.json(students);
  });
});

studentsRouter.get("/:id", (req, res) => {
  Student.findById(req.params.id).then((student) => {
    res.json(student);
  });
});

studentsRouter.post("/", (req, res) => {
  const data = req.body;

  const student = new Student(data);
  student.save().then((result) => {
    console.log(result);
    res.json(result);
  });
});

module.exports = studentsRouter;
