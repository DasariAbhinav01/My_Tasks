import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="bg-white p-4 rounded shadow w-25">
        
        <h2 className="text-center text-primary">Register</h2>
        <form>
          <div className="mb-3">
            <label className="form-label"><strong>Name</strong></label>
            <input type="text" placeholder="Enter Name" autoComplete="off" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" autoComplete="off" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>

          <p className="mt-3 text-center">Already have an account?</p>
          <Link to="/login" className="btn btn-outline-secondary w-100">Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
