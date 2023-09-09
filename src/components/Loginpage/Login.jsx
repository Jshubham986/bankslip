import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Col, Row,Container,Form,Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handelsubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:4545/userlogin", { email, password })
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem("token", res.data.data);
            console.log(res.data);
            toast.success("Login Successfully.");
            // Move the navigation here to execute after successful login
            navigate("/Maincontenct");
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
      <div className="mainbox">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={8} md={6} lg={4}>
              <div >
                <h2 className="text-center">Login</h2>
                <Form onSubmit={handelsubmit}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
  
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
  
                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                    <div className="text-center mt-3">
                    
                    <Button variant="success" href="/signup">
                      Sign Up
                    </Button>
                  </div>
  
                  <div className="text-center mt-3">
                    <a href="/forgot-password">Forgot Password?</a>
                    <br />
                    <a href="/signup">Don't have an account?</a>
                  </div>
  
                 
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}