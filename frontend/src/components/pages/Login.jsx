import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const { mode, isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setLoading(false);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={'/'} />;
  }

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <section className="auth-form">
        <form onSubmit={handleLogin}>
          <h1>LOGIN</h1>
          <div>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">SELECT ROLE</option>
              <option value="Reader">READER</option>
              <option value="Author">AUTHOR</option>
            </select>
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            Don't have an Account? <Link to={"/register"}>Register Now</Link>
          </p>
          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? <BeatLoader size={10} color={"#fff"} /> : "LOGIN"}
          </button>
        </form>
      </section>
    </article>
  );
};

export default Login;
