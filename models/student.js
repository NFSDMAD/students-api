const mongoose = require("mongoose");

const Student = mongoose.model("Student", {
  name: String,
  age: Number,
  address: {
    postCode: String,
    city: String,
  },
});

module.exports = Student;
