import React, { useState } from "react";
import { Form, Input, Switch, Button, Row, Col, message } from "antd";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";

const BankAccountDetails = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:4545/AddAccountDetails", values);

     response.status === 200?(
        toast.success("Account saved successfully!"),
        navigate("/ShowAccounts")):
        toast.error("Failed to save account.");
      
    } catch (error) {
      toast.error("An error occurred while saving the account.");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="col2">
        <div className="content-wrapper">
        <Container>
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Row align="middle" style={{ marginBottom: "20px" }}>
              <Col flex="none">
                <span  onClick={() => {
                        navigate("/Maincontenct");
                      }} style={{ fontSize: "25px", cursor: "pointer" }}>
                  <BiArrowBack />
                </span>
              </Col>
              <Col flex="auto">
                <h4 className="Account-master-text">Add Bank Account Details</h4>
              </Col>
            </Row>
            <Container>
            <Row gutter={16}>
              <Col span={10}>
                <Form.Item label="Account Name:" name="Account_name" rules={[{ required: true }]}>
                  <Input placeholder="Account name" />
                </Form.Item>

                <Form.Item label="Bank Name:" name="bank_name" rules={[{ required: true }]}>
                  <Input placeholder="Bank Name" />
                </Form.Item>

                <Form.Item label="Branch name:" name="Branch_name" rules={[{ required: true }]}>
                  <Input placeholder="Branch Name" />
                </Form.Item>

                <Form.Item label="Enter Email:" name="email" rules={[{ required: true, type: "email" }]}>
                  <Input placeholder="Enter Email" />
                </Form.Item>

                <Form.Item label="Balance:" name="balance" rules={[{ required: true }]}>
                  <Input type="number" step="1" placeholder="Balance" />
                </Form.Item>

              </Col>
              <Col span={10}>
              <Form.Item label="Account Number:" name="Account_no" rules={[{ required: true }]}>
                  <Input type="number" step="1"  placeholder="Account Number" />
                </Form.Item>

                <Form.Item label="Account Type:" name="account_type" rules={[{ required: true }]}>
                  <Input placeholder="Account Type" />
                </Form.Item>

                <Form.Item label="IFSC Code:" name="ifsc" rules={[{ required: true,  }]}>
                  <Input placeholder="IFSC Code" />
                </Form.Item>

                <Form.Item label="Mobile Number:" name="mobile" rules={[{ required: true }]}>
                  <Input type="number" step="1" placeholder="Mobile Number" />
                </Form.Item>

                <Row style={{marginTop:"53px"}} justify="center">
                  <Col className="accountHolder-submit-button">
                  <button type="submit" className="btn btn-primary" style={{ float: "right", marginRight: "15px" }} >Save Data</button>

                  </Col>
                  <Col>
                    <Button
                      style={{ marginLeft: "10px" }}
                      onClick={() => {
                        navigate("/Maincontenct");
                      }}
                    >
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            </Container>
          </Form>
        </Container>
        </div>
      </div>
    </>
  );
};

export default BankAccountDetails;
