import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
export default function Login() {
    const navigate = useNavigate();
    const [email, setUser] = useState("");
    const [password, setPass] = useState("");
    const [isAdmin,setIsAdmin]=useState(false)
    const handelsubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:4545/userlogin", { email, password })
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem("token", res.data.data);
            console.log(res.data);
            // toast.success("Login Successfully.");
            // Move the navigation here to execute after successful login
            if(email=== "admin@gmail.com" && password==="123"){
              setIsAdmin(true)
              toast.success("admin Login successfully");
              navigate("/admin");
              console.log(email, password);

            }else{
              setIsAdmin(false);
              toast.success("user Login Succesfully")
              navigate("/Maincontenct");
            }
            
          } else {
            toast.error("Please Check Username or Password");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Please Check Username or Password");
        });
    };
  
  return (
    <>
 
      <Row>
        <Col>
          <div className="mainbox">
            <div className="Container">
              <h2>Login</h2>
              <form onSubmit={handelsubmit}>
                <div className="box">
                    
                  <h4>Username</h4>
                  <div className="input-group flex-nowrap">
                    <input
                      required    
                      type="text"
                      value={email}
                      onChange={(e) => setUser(e.target.value)}
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                  <h4>Password</h4>
                  <div className="input-group flex-nowrap">
                    <input
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPass(e.target.value)}
                      className="form-control"
                      placeholder="Password"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>

                  <div className="forget">
                    <a href="">Forget Password?</a>
                  </div>
                    
                  <div className="btn1">
                    <button
                      style={{ alignItems: "Center", justifyContent: "center" }}
                    //   onClick={() => {
                    //     navigate("/Maincontenct");
                    //   }}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Login
                    </button>

                    <button
                      style={{ alignItems: "Center", justifyContent: "center" }}
                      onClick={() => {
                        navigate("/signup");
                      }}
                      type="button"
                      className="btn btn-success"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
