const mongoose = require("mongoose");

const Course = mongoose.model("Course", {
  name: String,
  city: String,
  startDate: Date,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

module.exports = Course;
