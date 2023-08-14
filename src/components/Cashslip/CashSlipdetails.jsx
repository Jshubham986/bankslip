import React, { useState, useEffect } from "react";
import { Table, Button, Row, Col } from "antd";
import { BsPlusLg } from "react-icons/bs";
import { AiFillDelete, AiFillPrinter } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CashSlipdetails = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const handleClick = () => {
    navigate("/CashSlip");
  };

  const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:4545/Get_cashslip", {
        headers: {
          authorization: `${token}`,
        },
      });
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const columns = [
    { title: "#", dataIndex: "index", key: "index" },
    { title: "Slip No", dataIndex: "slip_no", key: "slip_no" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Account Name", dataIndex: "Account_name", key: "Account_name" },
    { title: "Account No", dataIndex: "Account_no", key: "Account_no" },
    { title: "Bank Name", dataIndex: "bank_code", key: "bank_code" },
    { title: "Branch Name", dataIndex: "Branch_name", key: "Branch_name" },
    { title: "Total", dataIndex: "total", key: "total" },
    {
      title: "Print",
      dataIndex: "print",
      key: "print",
      render: (_, record) => (
        <Button style={{ border: "none", backgroundColor: "white" }}>
          <AiFillPrinter style={{ fontSize: "20px" }} />
        </Button>
      ),
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "delete",
      render: (_, record) => (
        <Button style={{ border: "none", backgroundColor: "white" }}>
          <AiFillDelete style={{ fontSize: "20px", color: "red" }} />
        </Button>
      ),
    },
  ];

  const dataSource = data.map((element, index) => ({
    key: index,
    index: index + 1,
    slip_no: element.slip_no,
    date: element.date,
    Account_name: element.Account_name,
    Account_no: element.Account_no,
    bank_code: element.bank_code,
    Branch_name: element.setBranch_name,
    total: element.total,
  }));

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="container">
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </div>

      <Button
        type="primary"
        shape="circle"
        size="large"
        style={{
          position: "fixed",
          right: "3%",
          bottom: "8%",
        }}
        onClick={handleClick}
      >
        <BsPlusLg style={{ fontSize: "24px", color: "white" }} />
      </Button>
    </>
  );
};

export default CashSlipdetails;
