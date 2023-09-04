import { useState } from "react";
import { Col, Row, Form, Input } from "antd";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const CashSlip = () => {


  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const [client_id, setSlip_no] = useState();
  const [Account_name, setAccount_name] = useState("");
  const [bank_code, setBank_code] = useState();
  // const [date, setDate] = useState(new Date().toLocaleDateString("en-GB"));
  const [date, setDate] = useState("");

  const [Account_no, setAccount_no] = useState("");
  const [Branch_name, setBranch_name] = useState("");
  const [qty2000, setTwoThou] = useState("");
  const [qty500, setFivhun] = useState(0);
  const [qty200, setTwohun] = useState(0);
  const [qty100, setHun] = useState(0);
  const [qty50, setFif] = useState(0);
  const [qty20, setTwenty] = useState(0);
  const [qty10, setTen] = useState(0);
  // const [total, setTotal] = useState(0);

  // const modalStyle = {
  //   display: isOpen ? "block" : "none",
  // };

  // Sum Function
  const handleSum = async () => {
    const data = {
       Account_name, bank_code, Account_no, Branch_name, qty2000, qty500, qty200, qty100, qty50, qty20, qty10, date
    }
    console.log(JSON.stringify(data))
    const total = (2000 * qty2000) + (200 * qty200) + (100 * qty100) + (10 * qty10) + (500 * qty500) + (20 * qty20) + (50 * qty50)
    if (total > 0) {


      const response = await axios.post("http://localhost:4545/addcashslip",data, {
        headers: {
          authorization: `${token}`,
        },
      });
      console.log(response.data)
      response.data.success ?
        (toast.success("Your Slip Has Been Generated"),
          navigate("/CashSlipdetail")) : toast.error("Somthing Wrong ?")
    } else {
      toast.error("Please Enter Valid Amount");
    }
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>
        {/* <a style={{ float: "right" }}>
          <FcLeft />
        </a> */}
        <div className="content-wrapper">
          <div className="container">
            <div style={{ justifyContent: "center" }}>
              <Row align="middle" >
                <Col flex="none">
                  <span
                    onClick={() => {
                      navigate("/CashSlipdetail");
                    }}
                    style={{ fontSize: "25px", cursor: "pointer" }}
                  >
                    <BiArrowBack />
                  </span>
                </Col>
                <Col flex="auto">
                  <h4 className="Account-master-text" style={{ fontSize: "28px", marginTop: "10px" }}>Cash Slip</h4>
                </Col>
              </Row>
              <Form style={{ justifyContent: "center", }} onFinish={handleSum}>
                <Row gutter={16} justifyContent="center">
                  <Col span={12}>
                    <Form.Item label="Slip No:">
                      <Input
                        placeholder="Slip No: 4"
                        type="text"
                        value={client_id}
                        style={{
                          width: window.innerWidth <= 768 ? '100px' : '100%',
                          maxWidth: '100px',
                        }}

                        onChange={(e) => setSlip_no(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item label="Account Name">
                      <Input
                        placeholder="Account Name"
                        type="text"
                        required
                        value={Account_name}
                        style={{
                          width: window.innerWidth <= 768 ? '100px' : '100%',
                          maxWidth: '180px',
                        }}
                        onChange={(e) => setAccount_name(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item label="Account Number">
                      <Input
                        placeholder="Account Number"
                        type="number" required
                        min={0}
                        value={Account_no}
                        onChange={(e) => setAccount_no(e.target.value)}
                        style={{
                          width: window.innerWidth <= 768 ? '100px' : '100%',
                          maxWidth: '180px',
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Date">
                      <Input type="date" required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={{
                          width: window.innerWidth <= 768 ? '100px' : '100%',
                          maxWidth: '180px',
                        }}

                        placeholder="Date" />
                    </Form.Item>

                    <Form.Item label="Bank IFSC Code">
                      <Input
                        placeholder="Bank IFSC Code"
                        type="text" required
                        value={bank_code}
                        onChange={(e) => setBank_code(e.target.value)}
                        style={{
                          width: window.innerWidth <= 768 ? '100px' : '100%',
                          maxWidth: '180px',
                        }}
                      />
                    </Form.Item>

                    <Form.Item label="Bank Branch">
                      <Input
                        placeholder="Bank Branch"
                        type="text" required
                        value={Branch_name}
                        onChange={(e) => setBranch_name(e.target.value)}
                        style={{
                          width: window.innerWidth <= 768 ? '100px' : '100%',
                          maxWidth: '180px',
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <div className="table">

                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Notes</th>
                        <th scope="col">X</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>2000</td>
                        <td>x</td>
                        <td>
                        
                          <input className="input-group input-group-sm " style={{
                            width: window.innerWidth <= 768 ? '100px' : '100%',
                            maxWidth: '100px',
                          }} type="number" min={0} value={qty2000} onChange={(e) => setTwoThou(e.target.value)} />
                        </td>
                        <td>
                          {2000 * qty2000}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>500</td>
                        <td>x</td>
                        <td>
                          <input className="input-group input-group-sm " style={{
                            width: window.innerWidth <= 768 ? '100px' : '100%',
                            maxWidth: '100px',
                          }} type="number" min={0} value={qty500} onChange={(e) => setFivhun(e.target.value)} />
                        </td>
                        <td>
                          {500 * qty500}
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">3</th>
                        <td>200</td>
                        <td>x</td>
                        <td>
                          <input className="input-group input-group-sm " style={{
                            width: window.innerWidth <= 768 ? '100px' : '100%',
                            maxWidth: '100px',
                          }} type="number" min={0} value={qty200} onChange={(e) => setTwohun(e.target.value)} />
                        </td>
                        <td>
                          {200 * qty200}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>100</td>
                        <td>x</td>
                        <td>
                          <input className="input-group input-group-sm " style={{
                            width: window.innerWidth <= 768 ? '100px' : '100%',
                            maxWidth: '100px',
                          }} type="number" min={0} value={qty100} onChange={(e) => setHun(e.target.value)} />
                        </td>
                        <td>
                          {100 * qty100}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>50</td>
                        <td>x</td>
                        <td>
                          <input className="input-group input-group-sm " style={{
                            width: window.innerWidth <= 768 ? '100px' : '100%',
                            maxWidth: '100px',
                          }} type="number" min={0} value={qty50} onChange={(e) => setFif(e.target.value)} />
                        </td>
                        <td>
                          {50 * qty50}
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">6</th>
                        <td>20</td>
                        <td>x</td>
                        <td>
                          <input className="input-group input-group-sm " style={{
                            width: window.innerWidth <= 768 ? '100px' : '100%',
                            maxWidth: '100px',
                          }} type="number" min={0} value={qty20} onChange={(e) => setTwenty(e.target.value)} />
                        </td>
                        <td>
                          {20 * qty20}
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">7</th>
                        <td>10</td>
                        <td>x</td>
                        <td>
                          <input className="input-group input-group-sm " style={{
                            width: window.innerWidth <= 768 ? '100px' : '100%',
                            maxWidth: '100px',
                          }} type="number" min={0} value={qty10} onChange={(e) => setTen(e.target.value)} />
                        </td>
                        <td>
                          {10 * qty10}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td></td>
                        <td></td>
                        <td>
                          <b>Total</b>
                        </td>
                        <td>
                          <b>{(2000 * qty2000) + (200 * qty200) + (100 * qty100) + (10 * qty10) + (500 * qty500) + (20 * qty20) + (50 * qty50)}</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="button" className="btn btn-primary" style={{ float: "right", marginRight: "10px", right: "5%" }} onClick={() => navigate("/CashSlipdetail")}>Cancle</button>

                  <button type="submit" className="btn btn-primary" style={{ float: "right", marginRight: "15px" }} >Save Data</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashSlip;
