import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Form, Input, Button, Row, Col, Select,Switch, message } from "antd";
// import 'antd/dist/antd.css';
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BankMaster = () => {
  // Function to handle form submission
  // const history = useHistory();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    axios
      .post("https://octoedge.in/AddBankMaster", values)
      .then((response) => {
        if (response.data.success) {
          message.success(response.data.msg);
          toast.success("Account saved successfully!");
          form.resetFields();
        } else {
          toast.error("Please Add Valide Deatils");
          message.error(response.data.msg);
        }
      })
      .catch((error) => {
        toast.error("Please Add Valide Deatils");
        console.error("Error:", error);
        message.error("An error occurred. Please try again later.");
      });
  };

  // Create a form instance to use with Ant Design Form
  const [form] = Form.useForm();

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
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
            <h4 className="Account-master-text">Add Bank Master</h4>
          </Col>
        </Row>
        <Form
          form={form}
          onFinish={handleSubmit}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Form.Item
            label="Bank Name"
            name="bank_name"
            rules={[{ required: true, message: "Please enter bank name!" }]}
          >
            <Input placeholder="Bank Name" />
          </Form.Item>
          <Form.Item
            label="Bank Type:"
            name="Bank Type"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select bank types">
              <Option value="CA">CA</Option>
              <Option value="SA">SA</Option>
              <Option value="SA">CC</Option>
              <Option value="SA">OD</Option>
              <Option value="SA">FD</Option>
              <Option value="SA">PL</Option>
              <Option value="SA">Loan</Option>
              <Option value="SA">Recuring</Option>
              <Option value="SA">Others</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Active:"
            name="active"
            valuePropName="checked"
            initialValue={true}
          >
            <Switch />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BankMaster;
