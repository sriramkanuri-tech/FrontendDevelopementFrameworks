import  { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validateForm = () => {
    let newErrors = {};

    // Name Validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(name)) {
      newErrors.name = "Name should contain only letters";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email Validation
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Course Validation
    if (!course.trim()) {
      newErrors.course = "Course is required";
    } else if (course.length < 2) {
      newErrors.course = "Course name is too short";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setMessage(`
Registration Successful!
Name: ${name}
Email: ${email}
Course: ${course}
      `);

      setName("");
      setEmail("");
      setCourse("");
      setErrors({});
    } else {
      setMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="error-message">{errors.name}</p>
        )}

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="error-message">{errors.email}</p>
        )}

        <label>Course</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Enter course name"
        />
        {errors.course && (
          <p className="error-message">{errors.course}</p>
        )}

        <button type="submit">Register</button>
      </form>

      {message && (
        <div className="success-message">
          <pre>{message}</pre>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;