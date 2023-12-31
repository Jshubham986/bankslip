import React, { useState } from "react";
import { Form, Input, Switch, Button, Row, Col, Select, message } from "antd";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";
import jwtDecode from "jwt-decode";

const { Option } = Select;
const NewAccount = () => {
  const [selectedState, setSelectedState] = useState("");

  const token = localStorage.getItem("token");
  const decode = jwtDecode(token);


  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(true);
  const [Data, setData] = useState({
    Account_name: "",
    Address: "",
    mobile: "",
    country: "India",
    state: "",
    city: "",
    pincode: "",

  })
  // const SubmitData=()=>{
  //   axios
  //   .post("http://localhost:4545/AddAccountMaster", Data,{
  //     headers: {
  //       authorization: `${token}`,
  //     },
  //   })
  //   .then((res) => {
  //     alert("Data Uploadede Succefully")
  //   })
  //   .catch((err) => console.log(err));
  // }
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4545/AddAccountMaster_by_Id",
        {
          ...Data,
          state: selectedState,
        }, {
        headers: {
          authorization: `${token}`,
        },
      }
      );
      
      if (response.status === 200) {
        toast.success("Account saved successfully!");
        navigate("/AccountList");
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
                  <span
                    onClick={() => {
                      navigate("/AccountList");
                    }}
                    style={{ fontSize: "25px", cursor: "pointer" }}
                  >
                    <BiArrowBack />
                  </span>
                </Col>
                <Col flex="auto">
                  <h4 className="Account-master-text">Add Account Holder</h4>
                </Col>
              </Row>
              <Container>
                <Row gutter={16}>
                  <Col span={10}>
                    <Form.Item
                      label="Account Name:"
                      name="Account_name"
                      rules={[{ required: true }]}


                    >
                      <Input placeholder="Account Name"
                        value={Data.Account_name}
                        onChange={(e) => {
                          setData({
                            ...Data, Account_name: e.target.value
                          })
                        }} />
                    </Form.Item>

                    <Form.Item
                      label="Mobile No.:"
                      name="mobile"
                      rules={[{ required: true }]}

                    >
                      <Input type="number" step="1" placeholder="Mobile No" disabled={!active}
                        value={Data.mobile}
                        onChange={(e) => {
                          setData({
                            ...Data, mobile: e.target.value
                          })

                        }} />
                    </Form.Item>

                    <Form.Item
                      label="City:"
                      name="city"
                      rules={[{ required: true }]}

                    >
                      <Input placeholder="City" disabled={!active}

                        value={Data.city}
                        onChange={(e) => {
                          setData({
                            ...Data, city: e.target.value
                          })
                        }} />
                    </Form.Item>

                    <Form.Item
                      label="State:" name="state"
                    >
                      <Select placeholder="Select a state"
                        disabled={!active}
                        value={selectedState}
                        onChange={(value) => setSelectedState(value)}>
                        <Option value="Andhra Pradesh">Andhra Pradesh</Option>
                        <Option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </Option>
                        <Option value="Assam">
                          Assam
                        </Option>
                        <Option value="Bihar">
                          Bihar
                        </Option>
                        <Option value="Chhattisgarh">
                          Chhattisgarh
                        </Option>
                        <Option value="">
                          Goa
                        </Option>
                        <Option value="Gujarat">
                          Gujarat
                        </Option>
                        <Option value="Haryana">
                          Haryana
                        </Option>
                        <Option value="Himachal Pradesh">
                          Himachal Pradesh
                        </Option>
                        <Option value="Jammu and Kashmir">
                          Jammu and Kashmir
                        </Option>
                        <Option value="Jharkhand">
                          Jharkhand
                        </Option>
                        <Option value="Karnataka">
                          Karnataka
                        </Option>
                        <Option value="Kerala">
                          Kerala
                        </Option>
                        <Option value="Madhya Pradesh">
                          Madhya Pradesh
                        </Option>
                        <Option value="Maharashtra" Select>
                          Maharashtra
                        </Option>
                        <Option value="Manipur">
                          Manipur
                        </Option>
                        <Option value="Meghalaya">
                          Meghalaya
                        </Option>
                        <Option value="Mizoram">
                          Mizoram
                        </Option>
                        <Option value="Nagaland">
                          Nagaland
                        </Option>
                        <Option value="Odisha">
                          Odisha
                        </Option>
                        <Option value="Punjab">
                          Punjab
                        </Option>
                        <Option value="Rajasthan">
                          Rajasthan
                        </Option>
                        <Option value="Sikkim">
                          Sikkim
                        </Option>
                        <Option value="Tamil Nadu	">
                          Tamil Nadu
                        </Option>
                        <Option value="Telangana">
                          Telangana
                        </Option>
                        <Option value="Tripura">
                          Tripura
                        </Option>
                        <Option value="Uttar Pradesh	">
                          Uttar Pradesh
                        </Option>
                        <Option value="Uttarakhand">
                          Uttarakhand
                        </Option>
                        <Option value="West Bengal	">
                          West Bengal
                        </Option>


                        {/* Add other states */}
                      </Select>
                    </Form.Item>

                    {/* <Form.Item
                      label="Active:"
                      name="active"
                      valuePropName="checked"
                      initialValue={true}
                    >
                      <Switch  onChange={handleActiveToggle}/>
                    </Form.Item> */}
                  </Col>
                  <Col span={10}>


                    <Form.Item
                      label="Address:"
                      name="address"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Address" disabled={!active}
                        value={Data.Address}
                        onChange={(e) => {
                          setData({
                            ...Data, Address: e.target.value
                          })
                        }}
                      />
                    </Form.Item>

                    <Form.Item
                      label="Pin Code:"
                      name="pin code"
                      rules={[{ required: true }]}
                    >
                      <Input type="number" step="1" placeholder="Pin code" disabled={!active}
                        value={Data.pincode}
                        onChange={(e) => {
                          setData({
                            ...Data, pincode: e.target.value
                          })
                        }}
                      />
                    </Form.Item>

                    <Form.Item
                      label="Country:"
                      name="country"

                    >
                      <Input placeholder="India" defaultValue="India"
                        value={Data.country}
                        onChange={(e) => {
                          setData({
                            ...Data, country: e.target.value
                          })
                        }} />
                    </Form.Item>

                    <Form.Item
                      label="Active:"
                      name="active"
                      valuePropName="checked"
                      initialValue={true}
                    >
                      <Switch  />
                    </Form.Item>

                    <Row justify="start">
                      <Col className="accountHolder-submit-button">
                      <button type="submit" className="btn btn-primary" style={{ float: "right", marginRight: "15px" }} >Save</button>

                      </Col>
                      <Col>
                        <Button
                          style={{ marginLeft: "10px" }}
                          onClick={() => {
                            navigate("/AccountList");
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
