import React, { useState } from "react";
import { Col, Row, Table, Form, Input, Button, InputNumber } from "antd";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import { FcLeft } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CashSlip = ({ isOpen, onClose }) => {
 

 
  const navigate = useNavigate();


  const [slip_no, setSlip_no] = useState();
  const [Account_name, setAccount_name] = useState("");
  const [bank_code, setBank_code] = useState();
  const [date, setDate] = useState(new Date().toLocaleDateString("en-GB"))
  const [Account_no, setAccount_no] = useState();
  const [Branch_name, setBranch_name] = useState("");
  const [Twothou, setTwoThou] = useState(0);
  const [fivhun, setFivhun] = useState(0);
  const [twohun, setTwohun] = useState(0);
  const [hun, setHun] = useState(0);
  const [fif, setFif] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [ten, setTen] = useState(0);
  const [total, setTotal] = useState(0);

  const modalStyle = {
    display: isOpen ? "block" : "none",
  };

 

// Sum Function
const handleSum = async()=>{
  const data = {
    slip_no, Account_name, bank_code, Account_no, Branch_name, thou :Twothou, fivhun, twohun, hun, fif, twenty, ten, date 
  }
  console.log(data)
  const response = await axios.post("http://localhost:4545/addcashslip", data);
  console.log(response)

}



  return (
    <div>
      
      <div style={modalStyle}>
        <a style={{ float: "right" }} onClick={onClose}>
          <FcLeft />
        </a>

        <div className="content-wrapper">
          <div className="container">
            <div>
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
                  <h4 className="Account-master-text">Cash Slip</h4>
                </Col>
              </Row>
              <Form>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Slip No:">
                      <Input
                        placeholder="Slip No: 4"
                        type="text"
                        value={slip_no}

                        onChange={(e) => setSlip_no(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item label="Account Name">
                      <Input
                        placeholder="Account Name"
                        type="text"
                        value={Account_name}
                        onChange={(e) => setAccount_name(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item label="Account Number">
                      <Input
                        placeholder="Account Number"
                        type="number"
                        min={0}
                        max={20}
                        value={Account_no}
                        onChange={(e) => setAccount_no(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Date">
                      <Input type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}

                     placeholder="Date" />
                    </Form.Item>

                    <Form.Item label="Bank Short Code">
                      <Input
                        placeholder="Bank Short Code"
                        type="text"
                        value={bank_code}
                        onChange={(e) => setBank_code(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item label="Bank Branch">
                      <Input
                        placeholder="Bank Branch"
                        type="text"
                        value={Branch_name}
                        onChange={(e) => setBranch_name(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="table">
            
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Notes</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>2000</td>
                    <td>
                      <input className="input-group input-group-sm mb-3" type="number" min={0} value={Twothou} onChange={(e)=>setTwoThou(e.target.value)}/>
                    </td>
                    <td>
                        {2000*Twothou}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>500</td>
                    <td>
                      <input className="input-group input-group-sm mb-3" type="number" min={0} value={fivhun} onChange={(e)=>setFivhun(e.target.value)}/>
                    </td>
                    <td>
                        {500*fivhun}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">3</th>
                    <td>200</td>
                    <td>
                      <input className="input-group input-group-sm mb-3" type="number" min={0} value={twohun} onChange={(e)=>setTwohun(e.target.value)}/>
                    </td>
                    <td>
                        {200*twohun}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>100</td>
                    <td>
                      <input className="input-group input-group-sm mb-3" type="number" min={0} value={hun} onChange={(e)=>setHun(e.target.value)}/>
                    </td>
                    <td>
                        {100*hun}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>50</td>
                    <td>
                      <input className="input-group input-group-sm mb-3" type="number" min={0} value={fif} onChange={(e)=>setFif(e.target.value)}/>
                    </td>
                    <td>
                        {50*fif}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">6</th>
                    <td>20</td>
                    <td>
                      <input className="input-group input-group-sm mb-3" type="number" min={0} value={twenty} onChange={(e)=>setTwenty(e.target.value)}/>
                    </td>
                    <td>
                        {20*twenty}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">7</th>
                    <td>10</td>
                    <td>
                      <input className="input-group input-group-sm mb-3" type="number" min={0} value={ten} onChange={(e)=>setTen(e.target.value)}/>
                    </td>
                    <td>
                        {10*ten}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td>
                     <b>Total</b>
                    </td>
                    <td>
                        {(2000*Twothou)+(200*twohun)+(100*hun)+(10*ten)+(500*fivhun)+(20*twenty)+(50*fif)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type="button" class="btn btn-primary" style={{float:"right"}} onClick={handleSum}>Save Data</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CashSlip;
