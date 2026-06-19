import React, { useState } from "react";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-box">

        {showLogin ? (
          <>
            <h2>Login Form</h2>

            <input type="email" placeholder="Email ID" />
            <input type="password" placeholder="Password" />

            <button>Login</button>

            <p>
              Don't have an account?
              <span onClick={() => setShowLogin(false)}>
                {" "}Register
              </span>
            </p>
          </>
        ) : (
          <>
            <h2>Registration Form</h2>

            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email ID" />
            <input type="text" placeholder="Phone Number" />
            <input type="password" placeholder="Password" />

            <button>Register</button>

            <p>
              Already have an account?
              <span onClick={() => setShowLogin(true)}>
                {" "}Login
              </span>
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default App;