const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nuclio:0123456789@cluster0.jtmdt.mongodb.net/ferclase"
);

const Student = mongoose.model("Student", {
  name: String,
  age: Number,
});

function readStudent() {
  Student.findById("6750af0e742d1dc1c256fcc1").then((student) => {
    console.log(student);
    student.age = 34;
    student.save().then((result) => {
      console.log("student updated", result);
    });
  });
}

async function readStudentAsync() {
  const student = await Student.findById("6750af0e742d1dc1c256fcc1");
  console.log(student);
  student.age = 34;
  const result = await student.save();
  console.log("student updated", result);
}

readStudentAsync();
