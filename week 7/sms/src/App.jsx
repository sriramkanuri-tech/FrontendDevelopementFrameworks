import { useState } from "react";
import StudentContext from "./StudentContext";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      <div className="container">
        <h1 className="title">
          🎓 Student Management System
        </h1>

        <StudentForm />

        <div className="count-box">
          Total Students: {students.length}
        </div>

        <StudentList />
      </div>
    </StudentContext.Provider>
  );
}

export default App;