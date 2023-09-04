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
  const token = localStorage.getItem("token")

const [Account_name,setAccount_name,]  = useState("");
const [bank_name,setbank_name,] = useState("");
const [Branch_name,setBranch_name] = useState("");
const [Account_no,setAccount_no] = useState("");
const [account_type,setaccount_type] = useState("");
const [ifsc,setifsc] = useState("");
const [mobile,setmobile] = useState("");
const [email,setemail] = useState("");
const [active,setactive] = useState("");

  const [form] = Form.useForm();


<<<<<<< HEAD
  // const [loading, setLoading] = useState(false);
  // const handleSubmit = async (values) => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.post("http://localhost:4545/AddAccountDetails", values);

  //     response.status === 200 ? (
  //       toast.success("Account saved successfully!"),
  //       navigate("/ShowAccounts")) :
  //       toast.error("Failed to save account.");

  //   } catch (error) {
  //     toast.error("An error occurred while saving the account.");
  //     console.error(error);
  //   }
  //   setLoading(false);
  // };


  const handleSubmit = async () => {
    const data = {
      Account_name, bank_name, Branch_name, Account_no, account_type, ifsc, mobile, email, active
    }
    console.log(JSON.stringify(data))
    {
      const response = await axios.post("http://localhost:4545/AddAccountDetails", data, {
        headers: {
          authorization: `${token}`,
        },
      });
      console.log(response.data)
      response.data.success ?
        (toast.success("Account saved successfully!"),
          navigate("/ShowAccounts")) : toast.error("Failed to save account.")
=======
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
>>>>>>> 710823e1fbb76545acdd5ee3d039d2158c7434c8
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="col2">
        <div className="content-wrapper">
<<<<<<< HEAD
          <Container>
            <Form form={form} onFinish={handleSubmit} layout="vertical">
              <Row align="middle" style={{ marginBottom: "20px" }}>
                <Col flex="none">
                  <span onClick={() => {
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
                      <Input placeholder="Account name"
                      value={Account_name} 
                      onChange={(e) => setAccount_name(e.target.value)}
                      />
                    </Form.Item>
=======
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
>>>>>>> 710823e1fbb76545acdd5ee3d039d2158c7434c8

                    <Form.Item label="Bank Name:" name="bank_name" rules={[{ required: true }]}>
                      <Input placeholder="Bank Name"
                      value={bank_name} 
                      onChange={(e) => setbank_name(e.target.value)}
                       />
                    </Form.Item>

                    <Form.Item label="Branch name:" name="Branch_name" rules={[{ required: true }]}>
                      <Input placeholder="Branch Name" 
                      value={Branch_name} 
                      onChange={(e) => setBranch_name(e.target.value)}
                      />
                    </Form.Item>

<<<<<<< HEAD
                    <Form.Item label="Enter Email:" name="email" rules={[{ required: true, type: "email" }]}>
                      <Input placeholder="Enter Email"
                      value={email} 
                      onChange={(e) => setemail(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item label="Active:" name="balance" rules={[{ required: true }]}>
                      <Input type="text" step="1" placeholder="Active"
                      value={active} 
                      onChange={(e) => setactive(e.target.value)}
                      />
                    </Form.Item>

                  </Col>
                  <Col span={10}>
                    <Form.Item label="Account Number:" name="Account_no" rules={[{ required: true }]}>
                      <Input type="number" step="1" placeholder="Account Number"
                      value={Account_no} 
                      onChange={(e) => setAccount_no(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item label="Account Type:" name="account_type" rules={[{ required: true }]}>
                      <Input placeholder="Account Type" 
                      value={account_type} 
                      onChange={(e) => setaccount_type(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item label="IFSC Code:" name="ifsc" rules={[{ required: true, }]}>
                      <Input placeholder="IFSC Code" 
                      value={ifsc} 
                      onChange={(e) => setifsc(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item label="Mobile Number:" name="mobile" rules={[{ required: true }]}>
                      <Input type="number" step="1" placeholder="Mobile Number"
                      value={mobile} 
                      onChange={(e) => setmobile(e.target.value)}
                      />
                    </Form.Item>

                    <Row style={{ marginTop: "53px" }} justify="center">
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
=======
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
>>>>>>> 710823e1fbb76545acdd5ee3d039d2158c7434c8
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
