import React, { useState } from "react";
import { Form, Input, Switch, Button, Row, Col, message, Select } from "antd";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";
import { Option } from "antd/es/mentions";


const BankAccountDetails = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:4545/AddAccountDetails", values);
console.log(response);
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
                        navigate("/ShowAccounts");
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

                <Form.Item label=" Bank Email:" name="email" >
                  <Input placeholder="Enter Bank Email" />
                </Form.Item>

               

              </Col>
              <Col span={10}>
              <Form.Item label="Account Number:" name="Account_no" rules={[{ required: true }]}>
                  <Input type="number" step="1"  placeholder="Account Number" />
                </Form.Item>

                <Col span={10}>
                    <Form.Item label="Account Type:" name="account_type" rules={[{ required: true }]}>
                      <Select>
                        <Option value="account_saving">Saving Account</Option>
                        <Option value="account_Cureent">Current Account</Option>
                        <Option value="account_fd">Fd Account</Option>
                        <Option value="account_loan">Loan Account</Option>
                        <Option value="account_recurring">Recurring Account</Option>
                        <Option value="account_other">Other</Option>
                        {/* Add other options as needed */}
                      </Select>
                    </Form.Item>
                    {/* ... other Form.Item components ... */}
                  </Col>

                <Form.Item label="IFSC Code:" name="ifsc" >
                  <Input placeholder="IFSC Code" />
                </Form.Item>

                <Form.Item label=" Bank Mobile Number:" name="mobile" >
                  <Input type="number" step="1" placeholder="Mobile Number" />
                </Form.Item>

                <Row style={{marginTop:"53px"}} justify="center">
                  <Col className="accountHolder-submit-button">
                  <button type="submit" className="btn  btn-primary" style={{ float: "right", marginRight: "15px" }} >Save Data</button>

                  </Col>
                  <Col className="accountHolder-submit-button">
                    <Button
                    className="btn"
                      style={{ marginLeft: "10px" }} 
                      onClick={() => {
                        navigate("/ShowAccounts");
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
