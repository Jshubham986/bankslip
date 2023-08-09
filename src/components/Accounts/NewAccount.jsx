import React, { useState } from "react";
import { Form, Input, Switch, Button, Row, Col, message } from "antd";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";

const NewAccount = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:4545/AddAccountMaster", values);

      if (response.status === 200) {
        toast.success("Account saved successfully!");
        navigate("/Maincontenct");
      } else {
        toast.error("Failed to save account.");
      }
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
                <h4 className="Account-master-text">Add Account Holder</h4>
              </Col>
            </Row>
            <Container >
            <Row gutter={16}>
              <Col span={10}>
                <Form.Item label="Client Id:" name="client_id" rules={[{ required: true }]}>
                  <Input placeholder="Client Id" />
                </Form.Item>

                <Form.Item label="Mobile No.:" name="mobile" rules={[{ required: true }]}>
                  <Input type="number" step="1" placeholder="Mobile No" />
                </Form.Item>

                <Form.Item label="Address:" name="address" rules={[{ required: true }]}>
                  <Input placeholder="Address" />
                </Form.Item>

                <Form.Item label="State:" name="state" rules={[{ required: true }]}>
                  <Input placeholder="State" />
                </Form.Item>

                <Form.Item label="Active:" name="active" valuePropName="checked">
                  <Switch />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item label="Account Name:" name="account_name" rules={[{ required: true }]}>
                  <Input placeholder="Account Name" />
                </Form.Item>

                <Form.Item label="Email Id:" name="email" rules={[{ required: true, type: "email" }]}>
                  <Input placeholder="Email Id" />
                </Form.Item>

                <Form.Item label="Country:" name="country" rules={[{ required: true }]}>
                  <Input placeholder="Country" />
                </Form.Item>

                <Form.Item label="City:" name="city" rules={[{ required: true }]}>
                  <Input placeholder="City" />
                </Form.Item>

                <Row justify="start">
                  <Col className="accountHolder-submit-button">
                    <Button type="primary" htmlType="submit" loading={loading}>
                      Submit
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

export default NewAccount;
