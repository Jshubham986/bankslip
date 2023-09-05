import React, { useState } from "react";
import { Form, Input, Button, Row, Col, message, Select } from "antd";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";

const { Option } = Select;

const BankAccountDetails = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    Account_name: "",
    bank_name: "",
    Branch_name: "",
    Account_no: "",
    account_type: "",
    ifsc: "",
    mobile: "",
    email: "",
    active: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4545/AddAccountDetails",
        formData,
        {
          headers: {
            authorization: `${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Account saved successfully!");
        navigate("/ShowAccounts");
      } else {
        toast.error("Failed to save account.");
      }
    } catch (error) {
      toast.error("An error occurred while saving the account.");
      console.error(error);
    }
  };

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="col2">
        <div className="content-wrapper">
          <Container>
            <Form onFinish={handleSubmit} layout="vertical">
              <Row align="middle" style={{ marginBottom: "20px" }}>
                <Col flex="none">
                  <span
                    onClick={() => {
                      navigate("/Maincontenct");
                    }}
                    style={{ fontSize: "25px", cursor: "pointer" }}
                  >
                    <BiArrowBack />
                  </span>
                </Col>
                <Col flex="auto">
                  <h4 className="Account-master-text">
                    Add Bank Account Details
                  </h4>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={10}>
                  <Form.Item
                    label="Account Name:"
                    name="Account_name"
                    rules={[{ required: true }]}
                  >
                    <Input
                      placeholder="Account name"
                      value={formData.Account_name}
                      onChange={(e) => handleInputChange(e, "Account_name")}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Bank Name:"
                    name="bank_name"
                    rules={[{ required: true }]}
                  >
                    <Input
                      placeholder="Bank Name"
                      value={formData.bank_name}
                      onChange={(e) => handleInputChange(e, "bank_name")}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Branch name:"
                    name="Branch_name"
                    rules={[{ required: true }]}
                  >
                    <Input
                      placeholder="Branch Name"
                      value={formData.Branch_name}
                      onChange={(e) => handleInputChange(e, "Branch_name")}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Enter Email:"
                    name="email"
                    rules={[{ required: true, type: "email" }]}
                  >
                    <Input
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange(e, "email")}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Active:"
                    name="balance"
                    rules={[{ required: true }]}
                  >
                    <Input
                      type="text"
                      step="1"
                      placeholder="Active"
                      value={formData.active}
                      onChange={(e) => handleInputChange(e, "active")}
                    />
                  </Form.Item>
                </Col>
                <Col span={10}>
                  <Form.Item
                    label="Account Number:"
                    name="Account_no"
                    rules={[{ required: true }]}
                  >
                    <Input
                      type="number"
                      step="1"
                      placeholder="Account Number"
                      value={formData.Account_no}
                      onChange={(e) => handleInputChange(e, "Account_no")}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Account Type:"
                    name="account_type"
                    rules={[{ required: true }]}
                  >
                    <Select
                      placeholder="Select an account type"
                      value={formData.account_type}
                      onChange={(value) => handleInputChange(value, "account_type")}
                    >
                      <Option value="account_saving">Saving Account</Option>
                      <Option value="account_Cureent">Current Account</Option>
                      <Option value="account_fd">Fd Account</Option>
                      <Option value="account_loan">Loan Account</Option>
                      <Option value="account_recurring">Recurring Account</Option>
                      <Option value="account_other">Other</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="IFSC Code:"
                    name="ifsc"
                    rules={[{ required: true }]}
                  >
                    <Input
                      placeholder="IFSC Code"
                      value={formData.ifsc}
                      onChange={(e) => handleInputChange(e, "ifsc")}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Mobile Number:"
                    name="mobile"
                    rules={[{ required: true }]}
                  >
                    <Input
                      type="number"
                      step="1"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange(e, "mobile")}
                    />
                  </Form.Item>

                  <Row style={{ marginTop: "53px" }} justify="center">
                    <Col className="accountHolder-submit-button">
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          float: "right",
                          marginRight: "15px",
                        }}
                      >
                        Save Data
                      </Button>
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
                  <Form.Item label="Bank Email:" name="bank_email">
                    <Input placeholder="Enter Bank Email" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </div>
    </>
);
};
export default BankAccountDetails;