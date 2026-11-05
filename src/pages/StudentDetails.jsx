import { useState } from "react";

function StudentDetails() {

  const [student, setStudent] = useState({
    name: "Abcd",
    roll: "101",
    department: "Computer Science",
    year: "Third Year"
  });

  function handleChange(e) {

    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });

  }

  return (

    <div className="card">

      <h2>Student Details</h2>

      <input
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Student Name"
      />

      <input
        name="roll"
        value={student.roll}
        onChange={handleChange}
        placeholder="Roll Number"
      />

      <input
        name="department"
        value={student.department}
        onChange={handleChange}
        placeholder="Department"
      />

      <input
        name="year"
        value={student.year}
        onChange={handleChange}
        placeholder="Year"
      />

      <div className="student-card">

        <h3>Student Information</h3>

        <p>Name: {student.name}</p>
        <p>Roll Number: {student.roll}</p>
        <p>Department: {student.department}</p>
        <p>Year: {student.year}</p>

      </div>

    </div>
  );
}

export default StudentDetails;