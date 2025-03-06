import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [role, setRole] = useState(""); // Step 1: No default role
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!role) {
      alert("Please select a login type!");
      return;
    }

    // Example authentication logic (Replace with API call)
    if (email === "test@example.com" && password === "password") {
      alert(`${role.toUpperCase()} Login Successful!`);
      navigate(role === "patient" ? "/patient-dashboard" : "/doctor-dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="bg-white p-4 rounded shadow w-25">
        <h2 className="text-center text-success">Login</h2>

        {/* Step 1: Ask for Login Type First */}
        {!role && (
          <div className="text-center">
            <p><strong>Select Login Type:</strong></p>
            <button className="btn btn-outline-primary mx-2" onClick={() => setRole("patient")}>
              Patient
            </button>
            <button className="btn btn-outline-danger mx-2" onClick={() => setRole("doctor")}>
              Doctor
            </button>
          </div>
        )}

        {/* Step 2: Show Login Form on Same Page */}
        {role && (
          <form onSubmit={handleLogin}>
            <h4 className="text-center text-primary">{role.toUpperCase()} Login</h4>

            <div className="mb-3">
              <label className="form-label"><strong>Email</strong></label>
              <input 
                type="email" 
                placeholder="Enter Email" 
                autoComplete="off" 
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label"><strong>Password</strong></label>
              <input 
                type="password" 
                placeholder="Enter Password" 
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">Login</button>

            <p className="mt-3 text-center">Don't have an account?</p>
            <button className="btn btn-outline-primary w-100" onClick={() => navigate("/register")}>Register</button>

            {/* Option to go back and reselect role */}
            <p className="text-center mt-2">
              <button className="btn btn-link" onClick={() => setRole("")}>Change Login Type</button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
