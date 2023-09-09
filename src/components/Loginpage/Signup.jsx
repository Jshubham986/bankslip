import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {
  const Navigate = useNavigate();
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setContact_No] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_pass, setconfirmpass] = useState("");

  const handellogin = (e) => {
    e.preventDefault();
    if (password !== confirm_pass) {
      toast.error("Password doesn't Match.");
    } else {
      axios
        .post("https://octoedge.in/Registration", {
          name,
          password,
          email,
          mobile,
          confirm_pass,
        })
        .then((res) => {
          toast.success("User Created Successfully");
          Navigate("/");
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="mainbox">
      <div className="Contaier">
        <h2>Registration</h2>
        <form onSubmit={handellogin}>
          <h5 style={{ marginTop: "15px" }}>Name</h5>
          <div className="input-group flex-nowrap">
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <h5>Email</h5>
          <div className="input-group flex-nowrap">
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <h5>Contact</h5>
          <div className="input-group flex-nowrap">
            <input
              required
              type="Contact"
              value={mobile}
              onChange={(e) => setContact_No(e.target.value)}
              class="form-control"
              placeholder="Contact"
              aria-label="password"
              aria-describedby="addon-wrapping"
            />
          </div>
          <h5>Password</h5>
          <div className="input-group flex-nowrap">
            <input
              required
              type="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-control"
              placeholder="Password"
              aria-label="password"
              aria-describedby="addon-wrapping"
            />
          </div>
          <h5>Confirm Password</h5>
          <div className="input-group flex-nowrap">
            <input
              required
              type="Password"
              value={confirm_pass}
              onChange={(e) => setconfirmpass(e.target.value)}
              class="form-control"
              placeholder="Confirm Password"
              aria-label="password"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div className="btn2">
            <button type="submit" class="btn btn-primary">
              Sign Up
            </button>
          </div>
          <div className="forget">
            <p>
              Already have on account?{" "}
              <a
                href=""
                onClick={() => {
                  Navigate("/");
                }}
              >
                Logn In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
