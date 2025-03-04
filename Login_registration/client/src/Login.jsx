import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="bg-white p-4 rounded shadow w-25">
        
        <h2 className="text-center text-success">Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" autoComplete="off" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" className="form-control" />
          </div>

          <button type="submit" className="btn btn-success w-100">Login</button>

          <p className="mt-3 text-center">Don't have an account?</p>
          <Link to="/register" className="btn btn-outline-primary w-100">Register</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
