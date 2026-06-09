import { useContext } from "react";
import StudentContext from "../StudentContext";

function StudentList() {
  const { students, setStudents } =
    useContext(StudentContext);

  const deleteStudent = (index) => {
    const updatedStudents =
      students.filter(
        (_, i) => i !== index
      );

    setStudents(updatedStudents);
  };

  return (
    <div className="list-card">
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No Students Added Yet</p>
      ) : (
        <ul>
          {students.map(
            (student, index) => (
              <li key={index}>
                <span>{student}</span>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteStudent(index)
                  }
                >
                  Delete
                </button>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}

export default StudentList;