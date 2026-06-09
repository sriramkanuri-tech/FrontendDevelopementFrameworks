import { useState, useContext } from "react";
import StudentContext from "../StudentContext";

function StudentForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const { students, setStudents } =
    useContext(StudentContext);

  const addStudent = () => {
    if (name.trim() === "") {
      setMessage("❌ Name cannot be empty");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
      setMessage(
        "❌ Only alphabets are allowed"
      );
      return;
    }

    setStudents([...students, name]);

    setMessage("✅ Student Added Successfully");

    setName("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="form-card">
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      {message && (
        <p className="message">
          {message}
        </p>
      )}
    </div>
  );
}

export default StudentForm;